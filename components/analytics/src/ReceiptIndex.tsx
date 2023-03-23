import { HexString } from 'ethers/types/utils/data'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import moment from 'moment'


interface Data{
  Event_name?:string,
  Block_number?:number,
  Transaction_hash?:string,
  From?:string,
  To?:string,
  Value?:HexString

}
interface PROPS{
  mode:any,
  data:Data,
  index:number
}


const decimals = BigInt(1E18)

function ReceiptIndex({mode,data,index}:PROPS) {



let hm = mode
  return (

    <div className={hm.indexes}>
    <h1>Index: {index}</h1>
    <hr />
    
  <label htmlFor="eventContainer">EVENT </label>
  <div id='eventContainer' className={hm.eventContainer}>
  {data.Event_name == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'? <p>Transfer</p>:data.Event_name == '0x23b872dd'?<p>TransferFrom</p>:<p></p>}
  </div>
  
  <label htmlFor="receiptDiv">RECEIPT</label>

  <ul id='receiptDiv' className={hm.receiptDiv}>
    <li>Block Number: {data.Block_number} </li>
    <li>Transaction hash: <Link href={`https://goerli.etherscan.io/tx/${data.Transaction_hash}`} target="_blank">{data.Transaction_hash}</Link></li>
    <li>From: {data.From}</li>
    <li>To: {data.To}</li>
    <li>Value:{data.Value?((((BigInt(data.Value))/decimals).toString())):""}</li>
  </ul>

  </div>
  )
}

export default ReceiptIndex

