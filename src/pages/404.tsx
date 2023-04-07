import Footer from "@/layout/Footer";
import { Link } from "@/components/Link";

function Error404() {
  return (
    <>
      <section className="grid h-screen place-content-center">
        <div className="flex flex-col items-center px-4">
          <h1 className="text-center text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Page Not Found
          </h1>
          <p className="my-4 text-center text-xl text-brand-subtext">
            The page you are trying to access does not exist.
          </p>
          <Link href="/">Go Home</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Error404;
