import { SettingsIcon } from "lucide-react";
import ConnectButton from "../connect-button";
import HeaderNavigation from "./header-navigation";
import Logo from "../logo/logo";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <Logo />
        <HeaderNavigation />
      </div>
      <div className="flex items-center gap-2">
        <ConnectButton />
        <HamburgerMenuIcon
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>
    </header>
  );
}
