import type { Metadata } from "next";

import Footer from "@/layout/Footer";
import LoginButton from "@/components/auth/login-button";

export const metadata: Metadata = {
  title: "Log in to your account",
};

function Auth() {
  return (
    <>
      <main>
        <div className="grid h-screen place-content-center px-4">
          <h1 className="mb-8 text-center text-4xl">
            Sign in to Fira to continue
          </h1>

          <LoginButton />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Auth;
