"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import HeaderNavigation from "./header-navigation";
import { useAccount, useDisconnect } from "wagmi";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import ConnectBtn from "../connect-button";

export default function HamburgerMenu() {
  const { isConnected, address, chain } = useAccount();
  const { disconnect } = useDisconnect();
  console.log(isConnected, address, chain);

  return (
    <Drawer direction="right">
      <DrawerTrigger className="lg:hidden" asChild>
        <HamburgerMenuIcon
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
      </DrawerTrigger>
      <DrawerContent className="h-full rounded-r-none w-full max-w-[300px] p-5 flex flex-col">
        <DrawerClose className="absolute right-4 top-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </DrawerClose>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback>Nad</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
            <p className="text-xs text-muted-foreground">{chain?.name}</p>
          </div>
          {isConnected ? (
            <Button
              className={cn(isConnected ? "flex" : "hidden")}
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
          ) : (
            <ConnectBtn />
          )}
        </div>
        <HeaderNavigation />
      </DrawerContent>
    </Drawer>
  );
}
