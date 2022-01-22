const { network } = require("hardhat");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("TKO", {
    from: deployer,
    log: true,
    args: [
      "https://ipfs.io/ipfs/QmW9snoUv7m2MkRJirgVyCQJuhsW1uJTrG7TAEhUz3swfg/",
      "0x6F84Fa72Ca4554E0eEFcB9032e5A4F1FB41b726C",
    ],
  });
};
module.exports.tags = ["all", "TKO"];
