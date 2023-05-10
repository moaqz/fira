"use client";

import { signOut } from "next-auth/react";
import { toast } from "sonner";

import { Button } from "@ui/index";

function LogoutButton() {
  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      toast.error("An error occurred while logout. Please try later.");
    }
  };

  return (
    <Button variant="pink" onClick={handleLogout}>
      Sign out
    </Button>
  );
}

export default LogoutButton;
