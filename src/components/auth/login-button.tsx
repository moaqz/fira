"use client";

import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useState } from "react";

import { Button} from "@ui/index";
import { GithubIcon } from "@ui/icons";

function LoginButton() {
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
    <Button
      variant="pink"
      size="large"
      onClick={handleSignIn}
      isLoading={loading}
    >
      <GithubIcon /> Sign in with Github
    </Button>
  );
}

export default LoginButton;
