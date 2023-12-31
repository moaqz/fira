"use client";

import SessionProvider from "./nextauth";
import ReactQueryProvider from "./react-query";
import ToasterProvider from "./toaster";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </SessionProvider>
      <ToasterProvider />
    </>
  );
}

export default Providers;
