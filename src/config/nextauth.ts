import NextAuth, { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

// Prisma adapter for NextAuth
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
      }

      return session;
    },
    async jwt({ token, user }) {
      const userByEmail = await prisma.user.findFirst({
        where: { email: token.email },
      });

      if (!userByEmail) {
        token.id = user?.id;
        return token;
      }

      return {
        id: userByEmail.id,
        name: userByEmail.name,
        email: userByEmail.email,
        image: userByEmail.image,
      };
    },
  },
  pages: {
    signIn: "/auth",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "",
};
