import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return res.json({ message: 'Method not allowed' })

  const { pollId } = req.query
  const session = await getServerSession(req, res, authOptions)

  const result = await prisma.poll.findUnique({
    where: { id: pollId as string },
    include: {
      options: {
        where: {
          pollId: pollId as string
        },
        include: {
          userVotes: {
            where: { userId: session?.user?.id ?? '' }
          }
        }
      },
      user: true
    }
  })

  return res.json(result)
}
