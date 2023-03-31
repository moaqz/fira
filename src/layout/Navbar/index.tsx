import NavbarLink from "./Link";
import NavbarMenu from "./Menu";
import Logo from "@/components/Logo";
import Auth from "@/components/Auth";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-b-brand-surface bg-brand-mantle">
      <nav className="mx-auto flex h-full max-w-screen-lg items-center justify-between px-4">
        <div className="flex h-full items-center gap-12">
          <Logo />
          <ul className="hidden h-full sm:flex sm:items-center sm:gap-x-8">
            <NavbarLink href="/create" text="Create Poll" />
          </ul>
        </div>
        <div className="hidden h-full sm:flex sm:items-center sm:gap-4">
          <Auth />
        </div>
        <NavbarMenu />
      </nav>
    </header>
  );
}
export default Navbar;
