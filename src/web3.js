// src/web3.js
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { QueryClient } from '@tanstack/react-query';
import { tenderlyVnet } from './chains';

const projectId = '548c2fc6824f865b248aafa58b13b6a7'; // твой реальный ID

// 2. Метаданные dApp (видно в кошельке)
const metadata = {
  name: 'Tenderly VNet Dapp',
  description: 'Тестовый dApp для подключения к Tenderly Virtual TestNet через QR',
  url: 'http://100.83.206.105:5173',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const wagmiConfig = defaultWagmiConfig({
  chains: [tenderlyVnet],
  projectId,
  metadata,
});

export const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig,
  projectId,
  enableAnalytics: false,
});
