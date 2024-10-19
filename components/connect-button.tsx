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

export const ConnectBtn = () => {
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
        className="min-w-[160px]"
      >
        {isConnecting ? "Connecting..." : "Connect your wallet"}
      </Button>
    );
  }

  if (isConnected && !chain) {
    return (
      <Button className="min-w-[160px]" onClick={openChainModal}>
        Wrong network
      </Button>
    );
  }

  return (
    <Button
      className="flex items-center justify-between min-w-[160px]"
      onClick={async () => openAccountModal?.()}
    >
      <Avatar className="w-6 h-6 text-xs">
        <AvatarFallback className=" bg-white text-black">LC</AvatarFallback>
      </Avatar>
      <span>
        {address.slice(0, 6)}...{address.slice(-4)}
      </span>
      <div onClick={openChainModal}>Switch</div>
    </Button>
  );
};

export default ConnectBtn;
