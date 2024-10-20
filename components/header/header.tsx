"use client";

import ConnectButton from "../connect-button";
import HeaderNavigation from "./header-navigation";
import Logo from "../logo/logo";
import HamburgerMenu from "./hamburger-menu";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 h-[72px] bg-background">
      <div className="flex items-center gap-4">
        <Logo />
        <HeaderNavigation className="hidden lg:flex" />
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <ConnectButton className="hidden lg:flex" />
        <HamburgerMenu />
      </div>
    </header>
  );
}
