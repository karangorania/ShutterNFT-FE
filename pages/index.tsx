import Head from 'next/head';
import { useState } from 'react';
import { Player } from '@livepeer/react';
import styles from '../styles/VideoPlayer.module.css';

export default function Home() {
  const [playbackSource, setPlaybackSource] = useState<string>('');

  const playbackUrl = '.m3u8';

  return (
    <>
      <Head>
        <title>Shutter NFT</title>
        <meta name="description" content="One place to download free videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1 className="text-green-400 font-xl">Shutter Video Player</h1>
        <h5 className="h5 text-green-400 font-xl">
          Provide a playback URL or playback Id
        </h5>
        <input
          className="border rounded-md text-base mx-2 mt-6 mb-5"
          type="text"
          value={playbackSource}
          name="playbackSource"
          onChange={(e) => setPlaybackSource(e.target.value)}
        />

        {playbackSource.includes(playbackUrl) ? (
          <Player src={playbackSource} autoPlay={true} loop muted />
        ) : (
          <Player playbackId={playbackSource} autoPlay={true} loop muted />
        )}
      </div>
    </>
  );
}
