import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="mb-32">{children}</main>
    </>
  );
}

export default AppLayout;
