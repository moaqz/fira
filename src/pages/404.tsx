import Button from "@/components/Button";
import Footer from "@/layout/Footer";
import { useRouter } from "next/router";

function Error404() {
  const router = useRouter();

  return (
    <>
      <section className="my-60">
        <div className="flex flex-col items-center px-4">
          <h1 className="mx-auto max-w-sm text-center text-4xl font-semibold leading-tight sm:max-w-xl sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-sm break-words text-center text-brand-subtext sm:max-w-md sm:text-xl">
            The page you are trying to access does not exist.
          </p>
          <Button
            variant="pink"
            className="mt-4"
            onClick={() => {
              router.push("/");
            }}
          >
            Go Home
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Error404;
