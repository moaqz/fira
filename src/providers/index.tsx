"use client";


import SessionProvider from "./nextauth";
import ToasterProvider from "./toaster";
import ReactQueryProvider from "./react-query";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </SessionProvider>
      <ToasterProvider />
    </>
  );
}

export default Providers;
