import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

async function Poll(req: NextApiRequest, res: NextApiResponse) {
  const { pollId } = req.query
  const session = await getSession({ req })

  const result = await prisma.poll.findUnique({
    where: { id: pollId as string },
    include: {
      options: {
        where: {
          pollId: pollId as string
        },
        include: {
          UserVotes: {
            // must fix this. When I add ?? '' it doesn't return any PollVote.
            where: { userId: session?.user?.id }
          }
        }
      },
      user: true
    }
  })

  return res.json(result)
}

export default Poll
