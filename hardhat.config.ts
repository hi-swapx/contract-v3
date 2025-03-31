import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.4.22",
      },
      {
        version: "0.7.0",
      },
      {
        version: "0.8.12",
      },
    ],
  },

  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    xonetest: {
      url: "https://rpc-testnet.xone.org/",
      accounts: [""],
    },
    xone: {
      url: "",
      accounts: [""],
    },
  },
};

export default config;
