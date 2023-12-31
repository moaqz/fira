import { Footer, Link } from "@ui/index";

function NotFound() {
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
          {/** TODO: Replace this for a Link  */}
          <a
            href="/"
            className="flex h-12 items-center justify-center gap-3 whitespace-nowrap rounded-md bg-brand-mauve px-6 font-semibold text-black transition-colors duration-200 hover:bg-brand-mauve2"
          >
            Go Home
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
