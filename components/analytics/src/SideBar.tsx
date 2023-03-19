import Link from 'next/link'
import React from 'react'
import hm from '../../../styles/Home.module.css'
import {XMarkIcon} from '@heroicons/react/24/outline'

function SideBar() {
  return (
    <div className={hm.sideBar}>
      <ul>
      <XMarkIcon className={hm.cancelLogo} />
        <li><Link href='#'>Receipts</Link></li>
        <li><Link href='#'>Token Holders</Link></li>
        <li><Link href='#'>Market</Link></li>
        <li><Link href='#'>Total Supply</Link></li>
        <li><Link href='#'>Token Details</Link></li>
      </ul>
    </div>
  )
}

export default SideBar