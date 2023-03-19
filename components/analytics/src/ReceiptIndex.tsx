import React from 'react'



function ReceiptIndex({mode}:any) {
let hm = mode
  return (
    <div className={hm.indexes}>
    <h1>Index: 1</h1>
    <h2>Time: 12:23pm</h2>
    <hr />
  <label htmlFor="eventContainer">EVENT </label>
  <div id='eventContainer' className={hm.eventContainer}>
  Transfer
  </div>
  <label htmlFor="receiptDiv">RECEIPT</label>
  <div id='receiptDiv' className={hm.receiptDiv}>
  recipt
  </div>
  </div>
  )
}

export default ReceiptIndex