function getBlockNumber(provider) {
  provider.getBlockNumber().then((blockNumber) => {
    const decimal = blockNumber.toLocaleString("en-gb");
    document.getElementById("block-number").innerHTML = decimal;

    provider.getBlock(blockNumber).then((block) => {
      document.getElementById("num-of-transactions").innerHTML = JSON.stringify(block, null, 2);
    });
  });
}

module.exports = getBlockNumber;
