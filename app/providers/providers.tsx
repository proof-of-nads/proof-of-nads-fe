import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <RainbowKitProvider>{children}</RainbowKitProvider>;
}
