// Components
import Button from "@/components/Button";

// External Libraries
import { useSession, signIn, signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { Github } from "@components/Icons";

function Auth() {
  const { status } = useSession();

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      toast.error("An error occurred while logout. Please try later.", {
        icon: "🤔",
      });
    }
  };

  if (status === "authenticated") {
    return (
      <Button variant="pink" onClick={handleLogout}>
        Logout
      </Button>
    );
  }

  if (status === "loading") {
    return (
      <Button variant="pink" disabled isLoading>
        Logout
      </Button>
    );
  }

  return (
    <Button variant="pink" onClick={() => signIn("github")}>
      <Github />
      Sign in with Github
    </Button>
  );
}

export default Auth;
