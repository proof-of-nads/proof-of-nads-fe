"use client";

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
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
import { useState } from "react";

export default function HamburgerMenu() {
  const { isConnected, address, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Drawer direction="right" open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger className="lg:hidden" asChild>
        <HamburgerMenuIcon
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
      </DrawerTrigger>
      <DrawerContent className="h-full rounded-r-none w-full max-w-[300px] p-5 flex flex-col">
        <DrawerClose className="absolute right-4 top-4">
          <Cross2Icon width={24} height={24} />
        </DrawerClose>
        <div className="flex items-center gap-2 pt-4">
          {address && (
            <>
              <div>
                <p className="text-sm font-medium">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </p>
                <p className="text-xs text-muted-foreground">{chain?.name}</p>
              </div>
              <Avatar>
                <AvatarFallback>Nad</AvatarFallback>
              </Avatar>
            </>
          )}
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
        <HeaderNavigation className="pt-4 text-xl items-start" />
      </DrawerContent>
    </Drawer>
  );
}
