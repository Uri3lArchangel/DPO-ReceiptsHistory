import { NextApiRequest, NextApiResponse } from "next";
import { run } from '../../components/Backend/index'
import { MongoClient } from 'mongodb'
const MONGO_PASS = process.env.MONGO_PASS
const MONGO_USER = process.env.MONGO_USER




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try{
    if(req.method !='GET'){
      res.status(405).json({'message':'Method not allowed only GET method is permited'})
    }
  let a = await run()


  if (a) {
    const client = await MongoClient.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@txrcpt.cw0xlsv.mongodb.net/TXRECPTS?retryWrites=true&w=majority`);
    const db = client.db()
    const RECEIPTS = db.collection('Receipts');

    let txdata = await RECEIPTS.find().toArray()
    for (let i = 0; i < a?.length; i++) {
      let duplicate = false
      if (txdata.length > 0) {
        for (let j = 0; j < txdata.length; j++) {
          if (txdata[j].Block_number === a[i].Block_number) {
            duplicate = true
          }
        }
      }
      if (duplicate) {
        continue
      } else {
        (await RECEIPTS.insertOne(a[i]))
         txdata = await RECEIPTS.find().toArray()

      }
    }

    res.status(200).json({ message: txdata });

  }

  }catch(err){
    console.error(err)
  }
}
