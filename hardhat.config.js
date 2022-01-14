require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/XU5G5MrpGw2ToNpwRMaIlCnSHV_PL7fD",
      accounts: ["ef3213abb147308db9410d549bbc94b03f1901b17645eb75eb0814fd2b9113f6"],
    },
  },
};
