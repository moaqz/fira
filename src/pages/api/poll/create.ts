import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getSession } from 'next-auth/react'

// POST /api/poll/create
async function handle(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).send({ message: 'Unauthorize' })
  }

  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email as string }
  })

  if (!user) {
    return res.status(401).json({ message: 'Unauthorize' })
  }

  const { title, description, options } = req.body
  const userId = user.id

  try {
    const { id } = await prisma.poll.create({
      data: {
        title,
        description,
        userId,

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

export default handle
