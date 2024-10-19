import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

// export const connectors = connectorsForWallets(
//   [
//     {
//       groupName: "Recommended",
//       wallets: [phantomWallet, rainbowWallet, metaMaskWallet],
//     },
//     {
//       groupName: "Others",
//       wallets: [coinbaseWallet, walletConnectWallet],
//     },
//   ],
//   { appName: "Proof-of-nads", projectId: "aa9ba13c8ff241ec73fad00ef17e5d44" }
// );

export function getDefaultRainbowConfig() {
  return createConfig({
    chains: [mainnet, sepolia],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });
}

// export const rainbowConfigClient = getDefaultConfig({
//   appName: "Proof-of-nads",
//   projectId: "aa9ba13c8ff241ec73fad00ef17e5d44",
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: true, // If your dApp uses server side rendering (SSR)
//   storage: createStorage({
//     storage: cookieStorage,
//   }),
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
// });

export const rainbowConfig = getDefaultRainbowConfig();
