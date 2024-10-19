"use client";
import AppRainbowKitProvider from "./app-rainbow-kit-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <AppRainbowKitProvider>{children}</AppRainbowKitProvider>;
}
