"use client";

import { SWRConfig } from "swr";
import { fetcher } from "@/lib/fetcher";

function SWRProvider({ children }: { children: React.ReactNode }) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}

export default SWRProvider;
