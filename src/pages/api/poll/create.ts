import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export function generateEndDate(endDate: string) {
  const endTime = Date.now() + parseInt(endDate) * 60 * 1000

  return new Date(endTime)
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.json({ message: 'Method not allowed' })

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).send({ message: 'Unauthorize.' })
  }

  const userId = session.user?.id

  if (!userId) {
    return res.status(401).send({ message: 'You must be signed in.' })
  }

  const { title, description, options, endDate } = req.body

  try {
    const { id } = await prisma.poll.create({
      data: {
        title,
        description,
        userId,
        endsAt: generateEndDate(endDate),

        options: {
          create: options
        }
      }
    })

    return res.json(id)
  } catch (error) {
    console.error('Failed to create poll', error)
    return res.status(500).json('Internal Server Error')
  }
}
