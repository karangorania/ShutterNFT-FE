import '../styles/globals.css';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { WagmiConfig, chain, createClient } from 'wagmi';
import { Navbar } from '../components';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const wagmiClient = createClient(
    getDefaultClient({
      appName: 'Shutter NFT',
      chains: [chain.polygonMumbai],
      alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_MUMBAI_API_KEY,
    })
  );

  const client = createReactClient({
    provider: studioProvider({
      apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY,
    }),
  });
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <ConnectKitProvider>
          <LivepeerConfig client={client}>
            <Navbar />
            <Component {...pageProps} />
          </LivepeerConfig>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
