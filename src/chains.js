// src/chains.js
import { defineChain } from 'viem';

// ПОДСТАВЬ сюда свои значения из Tenderly:
const VNET_CHAIN_ID = 1; // <-- сюда твой chainId
const VNET_RPC_URL = 'https://virtual.rpc.tenderly.co/Correy/project/public/17111969'; // <-- сюда твой Public RPC
const VNET_EXPLORER_URL =
  'https://dashboard.tenderly.co/<project>/vnet/<id>/explorer'; // можно временно оставить так или поставить свой

export const tenderlyVnet = defineChain({
  id: VNET_CHAIN_ID,
  name: 'My Tenderly Virtual Mainnet',
  nativeCurrency: {
    name: 'Virtual Ether',
    symbol: 'vETH',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: [VNET_RPC_URL] },
    public: { http: [VNET_RPC_URL] },
  },
  blockExplorers: {
    default: {
      name: 'Tenderly Explorer',
      url: VNET_EXPLORER_URL,
    },
  },
});
