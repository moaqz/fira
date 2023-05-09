import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";
import { Button, Logo } from "@ui/index";

function Navbar() {
  const { data: session } = useSession();

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
    <header className="sticky top-0 z-50 h-16 border-b border-b-brand-surface bg-brand-mantle/90">
      <nav className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-4">
        <Logo />
        <div className="flex items-center space-x-3 text-brand-subtext">
          <div className="flex items-center space-x-3">
            <img
              src={session?.user.image}
              width={24}
              height={24}
              className="rounded-full"
              alt={session?.user.name}
            />
            <p className="hidden md:block">{session?.user.name}</p>
          </div>
          <span className="text-gray-400">|</span>
          <Button onClick={handleLogout} variant="pink">
            Sign out
          </Button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
