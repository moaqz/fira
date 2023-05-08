"use client";

import NextSEOProviders from "./nextSEO";
import SessionProvider from "./nextauth";
import SWRProvider from "./swr";
import ToasterProvider from "./toaster";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextSEOProviders />
      <SessionProvider>
        <SWRProvider>{children}</SWRProvider>
      </SessionProvider>
      <ToasterProvider />
    </>
  );
}

export default Providers;
