import Image from 'next/legacy/image'
import React from 'react'
import logo from '/public/assets/directprivateoffers-logo-bd.png'

function TopBar({mode}:any) {
  return (
    <div className={mode.topBar}>
      <div className={mode.topContainer}>
        <h1>DIRECT PRIVATE OFFERS &quot;Global Expert Market&quot; </h1>
      </div>
      <div className={mode.imageContainer}>
        <Image src={logo} />
        <span>Recipts</span>
      </div>
    </div>
  )
}

export default TopBar