import { SettingsIcon } from "lucide-react";
import ConnectButton from "../connect-button";
import HeaderNavigation from "./header-navigation";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary w-8 h-8" />
          <span className="text-xl font-bold text-primary">Proof of Nads</span>
        </div>
        <HeaderNavigation />
      </div>
      <div className="flex items-center gap-2">
        <ConnectButton />
        <SettingsIcon width={24} height={24} />
      </div>
    </header>
  );
}
