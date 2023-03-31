import Button from "@/components/Button";
import Footer from "@/layout/Footer";
import { useRouter } from "next/router";
import { Rocket, BrightStar } from "iconoir-react";

function Home() {
  const router = useRouter();

  return (
    <>
      <section className="my-32 sm:my-40">
        <div className="px-4">
          <h1 className="mx-auto max-w-sm text-center text-4xl font-semibold leading-tight sm:max-w-xl sm:text-6xl">
            Create a poll and vote the{" "}
            <span className="bg-gradient-to-r from-brand-pink to-brand-mauve bg-clip-text font-black text-transparent">
              best ideas
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-sm break-words text-center text-brand-subtext sm:mt-8 sm:max-w-md sm:text-xl">
            Can{"'"}t decide? Get answers through a poll.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row">
          <Button
            variant="pink"
            size="large"
            onClick={() => router.push("/create")}
          >
            <Rocket className="rotate-45" />
            Get Started
          </Button>
          <a
            href="https://github.com/techwithmat/fira"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center gap-3 rounded-md bg-brand-surface px-6 text-white transition-colors duration-200 hover:bg-brand-surface2"
          >
            <BrightStar />
            Star on GitHub
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
