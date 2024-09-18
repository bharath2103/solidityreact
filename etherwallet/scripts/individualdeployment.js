const hre = require('hardhat')

async function main() {
    const contractPath = "contracts/EtherWallet.sol";

    await hre.run("compile", {sources : [contractPath] });
    console.log(`Compiled ${contractPath}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });