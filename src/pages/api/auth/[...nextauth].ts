import NextAuth, { type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

// Prisma adapter for NextAuth
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@lib/prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url
        }
      }
    })
  ],
  callbacks: {
    // Include user.id on session
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id
      }
    })
  },
  secret: process.env.NEXTAUTH_SECRET || ''
}

export default NextAuth(authOptions)
