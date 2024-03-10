import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
        </div>
        <div className={styles.logo}>Poopoocupcake</div>
        <div className={styles.links}>
            <ThemeToggle/>
            <Link href="/">Homepage</Link>
            <Link href="/">Post</Link>
            <Link href="/">Contact</Link>
            
        </div>
    </div>
  )
}

export default Navbar