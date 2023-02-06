import NextAuth, { type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

// // Prisma adapter for NextAuth
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@server/db/client'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || ''
    })
  ]
}

export default NextAuth(authOptions)
