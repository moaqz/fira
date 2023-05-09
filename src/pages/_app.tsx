import type { AppType } from "next/dist/shared/lib/utils";
import type { Session } from "next-auth";

// Styles
import "@/styles/globals.css";
import { Toaster } from "sonner";

// Auth
import { SessionProvider } from "next-auth/react";

// SEO
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "next-seo.config";

import { SWRConfig } from "swr";
import { fetcher } from "@/lib/fetcher";

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <SessionProvider session={session}>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </SessionProvider>
      <Toaster richColors position="bottom-center" closeButton />
    </>
  );
};

export default App;
