import Footer from "@/layout/Footer";
import Button from "@/components/Button";
import { Github } from "@components/Icons";

import { signIn } from "next-auth/react";
import { toast } from "sonner";

import { NextSeo } from "next-seo";
import { useState } from "react";

function Auth() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);

    try {
      await signIn("github", { callbackUrl: `/dash` });
    } catch (error) {
      setLoading(false);
      toast.error("Unable to log in. Please try again later.");
    }
  };

  return (
    <>
      <main>
        <NextSeo title="Log in to your account" />
        <div className="grid h-screen place-content-center px-4">
          <h1 className="mb-8 text-center text-4xl">
            Sign in to Fira to continue
          </h1>

          <Button
            variant="pink"
            size="large"
            onClick={handleSignIn}
            isLoading={loading}
          >
            <Github /> Sign in with Github
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Auth;
