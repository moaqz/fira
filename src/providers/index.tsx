"use client";

import NextSEOProviders from "./nextSEO";
import SessionProvider from "./nextauth";
import SWRProvider from "./swr";
import ToasterProvider from "./toaster";
import ReactQueryProvider from "./react-query";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextSEOProviders />
      <SessionProvider>
        <ReactQueryProvider>
          <SWRProvider>{children}</SWRProvider>
        </ReactQueryProvider>
      </SessionProvider>
      <ToasterProvider />
    </>
  );
}

export default Providers;
