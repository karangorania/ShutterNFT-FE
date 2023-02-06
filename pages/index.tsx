import Head from 'next/head';

export default function Home() {
  const text = 'Almost before we knew it, we had left the ground.';

  return (
    <>
      <Head>
        <title>Shutter NFT</title>
        <meta name="description" content="One place to download free videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
