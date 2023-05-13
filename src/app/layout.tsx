import Providers from "@/providers";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poll Maker - Fira",
  description: "A poll maker built with Next.js",
  themeColor: "#cba6f7",
  openGraph: {
    title: "Poll Maker - Fira",
    description: "A poll maker built with Next.js",
    url: "https://fira.vercel.app/",
    type: "website",
    locale: "en",
    siteName: "fira",
    images: {
      url: "https://fira.vercel.app/banner.png",
      width: 1900,
      height: 940,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background font-sans text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
