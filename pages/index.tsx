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
          {data.map((items,index)=>(<ReceiptIndex mode={hm} data={items} index={index} />))}
        </div>
      </RootLayout>
    </>
  );
}

export async function getServerSideProps() {
  let data:Object[]=[]
  let res = await fetch('http://localhost:3000/api/txdata',{
    method:'GET',

  
  })
  if(res){
   data =(await res.json()).message
  }

  return{
    props:{
      data
    }
  }
}