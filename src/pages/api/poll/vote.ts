import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getSession } from 'next-auth/react'

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).send({ message: 'Unauthorize.' })
  }

  const userId = session.user?.id

  if (!userId) {
    return res.status(401).send({ message: 'You must be signed in to vote.' })
  }

  const { pollId, pollOptionId } = req.body

  // Verify that post is still going on.
  const poll = await prisma.poll.findUnique({ where: { id: pollId } })

  if (poll && poll.endsAt <= new Date()) {
    console.error('Poll has ended.')
    res.status(500).json('Poll has ended.')
  }

  try {
    await prisma.$transaction([
      prisma.pollOptionVote.create({
        data: {
          pollId,
          userId,
          pollOptionId
        }
      }),

      prisma.pollOption.update({
        where: { id: pollOptionId },
        data: {
          totalCount: { increment: 1 }
        }
      })
    ])

    return res.json('Vote added')
  } catch (error) {
    console.error('Failed to vote for option.', { pollId, pollOptionId, userId }, error)
    return res.status(500).json('Unable to vote on poll at this time.')
  }
}

export default handle
