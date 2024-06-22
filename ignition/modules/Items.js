const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ItemModule = buildModule("ItemModule", (m) => {

  const items = m.contract("Items");

  return { items };
});

module.exports = ItemModule;

/*
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const SupModule = buildModule("SupModule", (m) => {
  const support = m.contract("support");

  return { support };
});

module.exports = SupModule;
*/