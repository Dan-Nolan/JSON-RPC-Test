import "./index.scss";
const { providers: { JsonRpcProvider } } = require('ethers');
const getBlockNumber = require('./getBlockNumber');

const provider = new JsonRpcProvider("https://mainnet.infura.io/v3/1a7bd32d1ba74c4c96cc4926e56c0ba6");

setInterval(() => getBlockNumber(provider), 5000);
