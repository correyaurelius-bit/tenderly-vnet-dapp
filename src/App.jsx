// src/App.jsx
import React from 'react';
import { useAccount, useChainId } from 'wagmi';

function App() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0b0b0f',
        color: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <div
        style={{
          padding: '24px 32px',
          borderRadius: '16px',
          border: '1px solid #333',
          maxWidth: 480,
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h1 style={{ marginBottom: 8, fontSize: 24 }}>Tenderly Virtual TestNet</h1>
        <p style={{ marginBottom: 20, fontSize: 14, color: '#aaa' }}>
          Подключи мобильный кошелёк через QR (WalletConnect), и он сразу выйдет на твой Tenderly
          Virtual TestNet (Public RPC).
        </p>

        {/* Готовая кнопка из Web3Modal */}
        <div style={{ marginBottom: 20 }}>
          <w3m-button />
        </div>

        <div
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            padding: '12px 14px',
            borderRadius: 12,
            background: '#15151c',
            border: '1px solid #27272f',
          }}
        >
          <div>
            Статус:{' '}
            <strong style={{ color: isConnected ? '#22c55e' : '#f97316' }}>
              {isConnected ? 'подключен' : 'не подключен'}
            </strong>
          </div>
          <div style={{ marginTop: 4 }}>
            Адрес:{' '}
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: 12,
                wordBreak: 'break-all',
              }}
            >
              {address ?? '—'}
            </span>
          </div>
          <div style={{ marginTop: 4 }}>Chain ID: {chainId ?? '—'}</div>
        </div>

        <p style={{ marginTop: 16, fontSize: 11, color: '#777' }}>
          1. Открой эту страницу на компьютере.
          <br />
          2. Нажми кнопку “Connect Wallet”.
          <br />
          3. В мобильном кошельке выбери WalletConnect / сканирование QR.
          <br />
          4. Подтверди подключение — и увидишь здесь свой адрес и Chain ID твоего Virtual TestNet.
        </p>
      </div>
    </div>
  );
}

export default App;
