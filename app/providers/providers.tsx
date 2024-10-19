"use client";

import AppRainbowKitProvider from "./app-rainbow-kit-provider";

export default function Providers({
  children,
  cookie,
}: {
  children: React.ReactNode;
  cookie: string;
}) {
  return (
    <AppRainbowKitProvider cookie={cookie}>{children}</AppRainbowKitProvider>
  );
}
