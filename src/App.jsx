import React from 'react'
import { WagmiConfig, createClient, configureChains, watchNetwork, watchAccount } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { getDefaultWallets, RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit'
import { ethers } from 'ethers'

/** 1) Configure your Sonic Testnet chain */
const sonicTestnet = {
  id: 14601,
  name: 'Sonic Testnet',
  network: 'sonic-testnet',
  nativeCurrency: { name: 'Sonic', symbol: 'S', decimals: 18 },
  rpcUrls: { default: 'https://rpc.testnet.soniclabs.com' }
}

/** 2) configureChains + publicProvider */
const { chains, provider, webSocketProvider } = configureChains(
  [sonicTestnet],
  [publicProvider()]
)

/** 3) RainbowKit’s default Injected (MetaMask) / WalletConnect / etc. */
const { connectors } = getDefaultWallets({
  appName: 'InFlow',
  chains
})

/** 4) Create Wagmi client */
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
})

export default function App() {
  /** you can hook into account/network here via wagmi hooks if you like */
  // const { address, isConnected } = useAccount()
  // const { chain } = useNetwork()

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        {/* 5) Exactly the same ConnectButton from beets.fi */}
        <div style={{ position: 'fixed', top: '1.5rem', right: '1.5rem', zIndex: 10 }}>
          <ConnectButton showBalance={false} />
        </div>

        {/* 6) YOUR EXISTING UI goes here */}
        {/* e.g. <MintStakeUI /> */}
        <div style={{ marginTop: '5rem' }}>
          {/* Replace this placeholder with your NFT-minting & staking boxes */}
          <h1>InFlow NFT Mint & Stake Dashboard</h1>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}