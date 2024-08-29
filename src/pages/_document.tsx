import { Html, Head, Main, NextScript } from "next/document";
import { config } from "@/config/config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Farcaster Frame - Mint NFT" />

        {/* required properties */}
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content={`${config.hostURL}/image.png`}
        />
        <meta property="og:image" content={`${config.hostURL}/image.png`} />

        {/* optional properties */}
        <meta
          property="fc:frame:post_url"
          content={`${config.hostURL}/api/mint}`}
        />
        <meta property="fc:frame:button:1" content="Mint NFT" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
