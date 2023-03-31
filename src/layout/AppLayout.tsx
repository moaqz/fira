import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="mb-28">{children}</main>
    </>
  );
}

export default AppLayout;
