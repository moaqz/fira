import Providers from "@/providers";
import "@/styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background bg-cover bg-center font-sans text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
