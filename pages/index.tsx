import hm_d from "../styles/Home.module.css";
import RootLayout from "../components/analytics/Layouts/RootLayout";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import ReceiptIndex from "../components/analytics/src/ReceiptIndex";
import hm_l from "/styles/light/Home.module.css";
import { useEffect, useState } from "react";

let hm = hm_d;

export default function Main() {
  return (
    <>
      <RootLayout>
        <LightBulbIcon className={hm.switchMode}/>
        <div className={hm.body}>
          <ReceiptIndex mode={hm} />
          <button>fetch</button>
        </div>
      </RootLayout>
    </>
  );
}
