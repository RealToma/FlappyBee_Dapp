const IS_MAINNET = process.env.REACT_APP_NETWORK === "mainnet";

const CONTRACTS = IS_MAINNET
  ? {
      BEETToken: process.env.REACT_APP_ADDRESS_CONTRACT_BEET_TOKEN_MAIN,
      BEETStaking: process.env.REACT_APP_ADDRESS_CONTRACT_BEET_STAKING,
    }
  : {
      BEETToken: process.env.REACT_APP_ADDRESS_CONTRACT_BEET_TOKEN_TEST,
      BEETStaking: process.env.REACT_APP_ADDRESS_CONTRACT_BEET_STAKING,
    };

const HTTP_PROVIDER_URL = IS_MAINNET
  ? "https://bsc.publicnode.com"
  : "https://bsc-testnet.publicnode.com";

export { IS_MAINNET, CONTRACTS, HTTP_PROVIDER_URL };
