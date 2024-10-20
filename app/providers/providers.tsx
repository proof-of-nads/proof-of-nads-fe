"use client";

import AppRainbowKitProvider from "./app-rainbow-kit-provider";
import ThemeProvider from "./theme-provider";

export default function Providers({
  children,
  cookie,
}: {
  children: React.ReactNode;
  cookie: string;
}) {
  return (
    <ThemeProvider>
      <AppRainbowKitProvider cookie={cookie}>{children}</AppRainbowKitProvider>
    </ThemeProvider>
  );
}
