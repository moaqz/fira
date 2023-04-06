import Footer from "@/layout/Footer";
import Button from "@/components/Button";
import { Github } from "@components/Icons";

import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

import { useState } from "react";
import { NextSeo } from "next-seo";

function Auth() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);

    try {
      await signIn("github", { callbackUrl: "/create" });
    } catch (error) {
      toast.error("An error occurred while logging in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NextSeo title="Log in to your account" />
      <div className="my-32 flex flex-col items-center justify-center px-4 sm:my-40">
        <h1 className="mb-8 text-center text-4xl">🔥 Welcome to Fira</h1>
        <Button variant="pink" onClick={handleSignIn} isLoading={loading}>
          <Github /> Sign in with Github
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default Auth;
