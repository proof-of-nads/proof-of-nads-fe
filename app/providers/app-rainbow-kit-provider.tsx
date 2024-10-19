import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  holesky,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { phantomWallet } from "@rainbow-me/rainbowkit/wallets";

const config = getDefaultConfig({
  appName: "Proof-of-nads",
  projectId: "YOUR_PROJECT_ID",

  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    holesky,
    arbitrum,
    optimism,
  ],
  ssr: true,
});

const queryClient = new QueryClient();

export default function AppRainbowKitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
