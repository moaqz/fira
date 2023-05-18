import { Header } from "@/components/ui";
import { getUserSession } from "@/lib/get-user-session";

async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getUserSession();

  return (
    <>
      <Header session={session} />
      {children}
    </>
  );
}

export default Layout;
