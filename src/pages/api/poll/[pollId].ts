import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

async function Poll(req: NextApiRequest, res: NextApiResponse) {
  const { pollId } = req.query

  const result = await prisma.poll.findUnique({
    where: { id: pollId as string },
    include: {
      options: {
        where: {
          pollId: pollId as string
        }
      }
    }
  })

  return res.json(result)
}

export default Poll
