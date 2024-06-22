const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ItemsForSellModule = buildModule("ItemsForSellModule", (m) => {

  const items = m.contract("ItemsForSell");

  return { items };
});

module.exports = ItemsForSellModule;

/*
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const SupModule = buildModule("SupModule", (m) => {
  const support = m.contract("support");

  return { support };
});

module.exports = SupModule;
*/