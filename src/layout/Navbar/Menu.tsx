import { Menu, Cancel } from "@components/Icons";
import Button from "@/components/Button";
import { useState } from "react";
import NavbarLink from "./Link";
import Logo from "@/components/Logo";
import Auth from "@/components/Auth";

function NavbarMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="sm:hidden">
      <Button onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </Button>
      {isOpen && (
        <div className="absolute left-0 top-0 flex w-full flex-col gap-4 border-b border-b-brand-surface bg-brand-mantle p-4">
          <div className="flex justify-between">
            <Logo />
            <Button onClick={() => setIsOpen(!isOpen)}>
              <Cancel />
            </Button>
          </div>
          <ul className="flex flex-col gap-4">
            <NavbarLink href="/create" text="Create Poll" />
          </ul>
          <div className="flex flex-col gap-3">
            <Auth />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarMenu;
