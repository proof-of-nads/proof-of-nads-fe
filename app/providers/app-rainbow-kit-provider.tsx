"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  cookieStorage,
  cookieToInitialState,
  createStorage,
  WagmiProvider,
} from "wagmi";
import { mainnet, arbitrumSepolia, optimismSepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  phantomWallet,
  okxWallet,
  magicEdenWallet,
} from "@rainbow-me/rainbowkit/wallets";

const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, arbitrumSepolia, optimismSepolia],
  wallets: [
    {
      groupName: "Recommended",
      wallets: [okxWallet, magicEdenWallet, phantomWallet],
    },
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

const queryClient = new QueryClient();

export default function AppRainbowKitProvider({
  children,
  cookie,
}: {
  children: React.ReactNode;
  cookie: string;
}) {
  const initialState = cookieToInitialState(config, cookie);

  return (
    <WagmiProvider config={config} {...(initialState ? { initialState } : {})}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
