require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    localganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: ["0xb59ff46b7d98a4dac1a2b3349c9eb46dc1df3feab2cd1dc5415b33f6cbb251b4"]
    },
    hardhat: {
   
    },
  }
};
