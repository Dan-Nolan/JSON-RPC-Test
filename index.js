const axios = require('axios');

const promise = axios.post('https://mainnet.infura.io/v3/1a7bd32d1ba74c4c96cc4926e56c0ba6', {
  jsonrpc: "2.0",
  method: "eth_blockNumber",
  id: 0,
});

promise.then((response) => {
  if(response.data.error) {
    console.log(response.data.error);
    return;
  }
  console.log( response.data.result );
});
