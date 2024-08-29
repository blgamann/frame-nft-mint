export const config = {
  neynar: {
    apiKey: process.env.NEYNAR_API_KEY,
  },
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  hostURL: process.env.NEXT_PUBLIC_HOST_URL,
  thirdweb: {
    chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID),
    engine: {
      url: process.env.THIRDWEB_ENGINE_URL,
      wallet: process.env.THIRDWEB_ENGINE_WALLET,
      accessToken: process.env.THIRDWEB_ENGINE_ACCESS_TOKEN,
    },
  },
};
