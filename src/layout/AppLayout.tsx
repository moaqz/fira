import Header from "./Header";
// import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="mb-32">{children}</main>
      {/* <Footer /> */}
    </>
  );
}

export default AppLayout;
