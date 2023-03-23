import RootLayout from "../components/analytics/Layouts/RootLayout";
import ReceiptIndex from "../components/analytics/src/ReceiptIndex";
import hm_l from "/styles/light/Home.module.css";

let hm = hm_l
interface PROP{
  data:object[]|[]
}

export default function Main({data}:PROP) {

  return (
    <>
      <RootLayout>
        {/* <LightBulbIcon className={hm.switchMode}/> */}
        <div className={hm.body}>
        <h1>Transaction Recipts</h1>
          {data.map((items,index)=>(<ReceiptIndex mode={hm} data={items} index={index} key={index} />))}
        </div>
      </RootLayout>
    </>
  );
}

export async function getServerSideProps() {
  try{
  let data:Object[]=[]
  let res = await fetch('http://127.0.0.1:3000/api/txdata',{
    method:'GET',
  mode:'no-cors'
  
  })
  if(res){
   data =(await res.json()).message
  }

  return{
    props:{
      data
    }
  }}catch(error){
    console.error(error)
  }
}