import Web3 from 'web3';
import { output } from './DPOabi.json';
const url = process.env.QUICKNODE_URL!;
const web3 = new Web3(url);
let blocknumberReceipts: number[] =[]
let isDuplicate = false
const tokenAddress = '0x73ea12a934a9a08614d165db30f87bdfd1a2cb92';
const abi: any = output.abi;
const contractAddress = tokenAddress;
interface Data{
  Event_name?:string,
  Block_number?:number,
  Transaction_hash?:string,
  From?:string,
  To?:string,
  Value?:string

}
let data:Data[] = []
const contract = new web3.eth.Contract(abi, contractAddress);

async function logReceipt(receipt: any) {
  const eventName = receipt.logs[0].topics[0];
  if (eventName === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' || eventName === '0x23b872dd') {
    for (let i = 0; i < blocknumberReceipts.length; i++) {

      if (blocknumberReceipts[i] === receipt.blockNumber) {
        isDuplicate = true
        break
      } else {
        isDuplicate = false
      }
    }
    if (!isDuplicate) {
      data.push({
        'Event_name': eventName,
        'Block_number': receipt.blockNumber,
        'Transaction_hash': receipt.transactionHash,
        'From': receipt.from,
        'To': receipt.to,
        'Value': receipt.logs[0].data
      })
      blocknumberReceipts.push(receipt.blockNumber)
      isDuplicate = false
    }
  }
}

export async function run() {
  const currentBlockNumber = await web3.eth.getBlockNumber();
  let lastCheckedBlockNumber = currentBlockNumber - 100;

  const latestBlockNumber = await web3.eth.getBlockNumber();

  if (lastCheckedBlockNumber === latestBlockNumber) {
    return;
  }
  for (let blockNumber = lastCheckedBlockNumber + 1; blockNumber <= latestBlockNumber; blockNumber++) {
    const filter = { fromBlock: blockNumber, toBlock: latestBlockNumber, address: contractAddress };
    const events = await contract.getPastEvents('allEvents', filter);

    for (let i = 0; i < events.length; i++) {

      const receipt = await web3.eth.getTransactionReceipt(events[i].transactionHash);
      await logReceipt(receipt);

    }
  }

  lastCheckedBlockNumber = latestBlockNumber;

  return data
}

