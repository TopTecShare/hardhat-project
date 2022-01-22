async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const TKO = await ethers.getContractFactory("TKO");
  await TKO.deploy(
    "https://ipfs.io/ipfs/QmW9snoUv7m2MkRJirgVyCQJuhsW1uJTrG7TAEhUz3swfg/",
    "0x6F84Fa72Ca4554E0eEFcB9032e5A4F1FB41b726C"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
