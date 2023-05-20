require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    Sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/lEPnWkFxGx8pRv5e6PuWpCIH-BKEoarw",
      accounts: [
        "9a47b012c305cb79153fbb70bad3546bf5e63383d9b383f87c05eda68573b5a7",
      ],
    },
  },
};
