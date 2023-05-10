import Providers from "@/providers";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poll Maker - Fira",
  description: "A poll maker application built with Next.js",
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
