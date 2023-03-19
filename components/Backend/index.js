import Web3 from 'web3';
import metadata from'./DPOabi.json'
const url = 'https://bold-cool-star.ethereum-goerli.quiknode.pro/373573559c72f9a10f7175d1d256b219c9a1c17a/'
const web3 = new Web3(url)

const tokenAddress = '0xa5DF3360348618A98fFbA335D238205Ec6FA1a46'

const abi = metadata.output.abi; // replace with the ABI of your smart contract
const contractAddress = tokenAddress; // replace with the address of your smart contract
const contract = new web3.eth.Contract(abi, contractAddress);

export async function run(){

const currentBlockNumber = await web3.eth.getBlockNumber();

for (let blockNumber = 0; blockNumber <= currentBlockNumber; blockNumber++) {
  const filter = { fromBlock: blockNumber, toBlock: blockNumber, address: contractAddress };
  const events = await contract.getPastEvents('allEvents', filter);
  const txHashes = events.map(event => event.transactionHash);
  const txReceipts = await Promise.all(txHashes.map(txHash => web3.eth.getTransactionReceipt(txHash)));
  console.log(`Block ${blockNumber}:`, txReceipts);
}
}
