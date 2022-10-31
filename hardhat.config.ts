import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import * as dotenv from 'dotenv'
dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env['ALCHEMY_API']}`,
      chainId: 5,
      accounts: [process.env['FROM'] || ''],
    },
    altDevNet: {
      url: "https://devnet-rpc.altlayer.io/",
      chainId: 9990,
      accounts: [process.env['FROM'] || ''],
    }
  },

  // Refer to setting in blockscout:
  //   https://docs.blockscout.com/for-users/verifying-a-smart-contract/hardhat-verification-plugin
  etherscan: {
    apiKey: {
      altDevNet: "abc"
    },
    customChains: [
      {
        network: "altDevNet",
        chainId: 9990,
        urls: {
          apiURL: "https://devnet-explorer.altlayer.io/api",
          browserURL: "https://devnet-explorer.altlayer.io"
        }
      }
    ]
  }
};

export default config;
