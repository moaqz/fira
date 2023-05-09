"use client";

import { toast } from "sonner";
import { signOut } from "next-auth/react";

import Button from "@components/Button";

function LogoutButton() {
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

  return (
    <Button variant="pink" onClick={handleLogout}>
      Sign out
    </Button>
  );
}

export default LogoutButton;
