require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/XU5G5MrpGw2ToNpwRMaIlCnSHV_PL7fD",
      accounts: ["private key"],
    },
  },
};