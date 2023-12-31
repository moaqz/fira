import { RocketIcon, StarIcon } from "@ui/icons";
import { ExternalLink, Footer, Link } from "@ui/index";

function Home() {
  return (
    <>
      <main>
        <section className="grid h-screen place-content-center px-5 pb-20">
          <div className="mb-12">
            <h2 className="tracking text-center text-2xl font-bold leading-none">
              Fira
            </h2>
          </div>
          <div className="mx-auto max-w-4xl px-5">
            <h1 className="text-center text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              Create your poll in seconds
            </h1>
            <p className="mx-auto mt-10 text-center text-base text-brand-subtext sm:max-w-lg sm:text-xl">
              Customize your questions and share it to get instant feedback.
            </p>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-2 sm:flex-row">
            <Link href="/dash">
              <RocketIcon />
              Get Started
            </Link>
            <ExternalLink href="https://github.com/moaqz/fira">
              <StarIcon />
              Star on GitHub
            </ExternalLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
