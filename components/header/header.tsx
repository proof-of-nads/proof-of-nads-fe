"use client";

import ConnectButton from "../connect-button";
import HeaderNavigation from "./header-navigation";
import Logo from "../logo/logo";
import HamburgerMenu from "./hamburger-menu";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 h-[72px]">
      <div className="flex items-center gap-4">
        <Logo />
        <HeaderNavigation className="hidden lg:flex" />
      </div>
      <div className="flex items-center gap-2">
        <ConnectButton className="hidden lg:flex" />
        <HamburgerMenu />
      </div>
    </header>
  );
}
