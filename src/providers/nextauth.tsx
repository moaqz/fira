"use client";

import { SessionProvider as NextAuthProvider } from "next-auth/react";

function SessionProvider({ children }: { children: React.ReactNode }) {
  return <NextAuthProvider>{children}</NextAuthProvider>;
}

export default SessionProvider;
