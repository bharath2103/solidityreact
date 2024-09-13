require("@nomicfoundation/hardhat-toolbox");

//create a task called accounts that will list the accounts that we get
//from our hardhat node and the balance each account holds currently
//hre stands for hardhat runtime environment

task("accounts",
   "Prints the list of accounts and their balances",
    async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const balance = await hre.ethers.provider.getBalance(account.address);
    console.log(account.address, ": ", balance);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  paths: {
    sources: './contracts',
    artifacts: './src/artifacts'
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainID: 1337
    },
    goerli: {
      url: 'https://goerli-testnet-node-url.com',
      // accounts: [privateKey1, privateKey2]
    }
  }
};
