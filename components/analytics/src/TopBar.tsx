import Image from 'next/image'
import React from 'react'
import hm from'../../../styles/Home.module.css'
import logo from '/public/assets/dpo-logo-header.png'

function TopBar() {
  return (
    <div className={hm.topBar}>
      <div className={hm.logoContainer}>
        <Image src={logo} alt='DPO' />
        <span>Analytics</span>
      </div>
    </div>
  )
}

export default TopBar