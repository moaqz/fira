"use client";

import { DefaultSeo } from "next-seo";
import nextSeoConfig from "next-seo.config";

function NextSEOProviders() {
  return <DefaultSeo {...nextSeoConfig} />;
}

export default NextSEOProviders;
