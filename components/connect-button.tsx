"use client";

import { useEffect, useRef } from "react";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { cn } from "@/lib/utils";

export const ConnectBtn = ({ className }: { className?: string }) => {
  const { isConnecting, isConnected, chain, address } = useAccount();

  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  const { disconnect } = useDisconnect();

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  if (!isConnected) {
    return (
      <Button
        onClick={async () => {
          // Disconnecting wallet first because sometimes when is connected but the user is not connected
          if (isConnected) {
            disconnect();
          }
          openConnectModal?.();
        }}
        disabled={isConnecting}
        className={cn("md:min-w-[160px]", className)}
      >
        {isConnecting ? "Connecting..." : "Connect wallet"}
      </Button>
    );
  }

  if (isConnected && !chain) {
    return (
      <Button
        className={cn("min-w-[160px]", className)}
        onClick={openChainModal}
      >
        Wrong network
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        className={cn(
          "flex items-center justify-between min-w-[160px]",
          className
        )}
        onClick={async () => openAccountModal?.()}
      >
        <Avatar className="w-6 h-6 text-xs">
          <AvatarFallback className=" bg-white text-black">LC</AvatarFallback>
        </Avatar>
        {address && (
          <span>
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
        )}
      </Button>
      <div className="cursor-pointer" onClick={openChainModal}>
        Switch
      </div>
    </div>
  );
};

export default ConnectBtn;
