import Image from "next/image";
import { Session } from "next-auth";

import Logo from "@ui/logo";
import { Link } from "@ui/link";
import LogoutButton from "@components/auth/logout-button";

function Header({ session }: { session: Session | null }) {
  return (
    <header className="h-16 border-b border-b-brand-surface bg-brand-mantle/90">
      <nav className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-4">
        <Logo />
        <div className="flex items-center space-x-3 text-brand-subtext">
          {session ? (
            <>
              <div className="flex items-center space-x-3">
                <Image
                  src={session?.user.image}
                  width={24}
                  height={24}
                  className="rounded-full"
                  alt={session?.user.name}
                />
                <p className="hidden md:block">{session?.user.name}</p>
              </div>
              <span className="text-gray-400">|</span>
              <LogoutButton />
            </>
          ) : (
            <Link href="/auth" variant="gray">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
