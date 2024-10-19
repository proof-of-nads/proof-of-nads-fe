"use client";

import { Button, buttonVariants } from "./ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function RainbowKitConnectButton() {
  return (
    <Button className={buttonVariants({ variant: "default" })}>
      <ConnectButton />
    </Button>
  );
}
