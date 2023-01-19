import React from 'react'
import styles from '@/styles/Navigation.module.css'
import Link from 'next/link'

function Navigation() {
  return (
    <div className={styles.NavigationMain}>
        <nav>
            <ul>
                <Link href="/">
                <li>
                    Home
                </li>
                </Link>
                <Link href="/about">
                <li>
                    About
                </li>
                </Link>
                <Link href="/blog">
                <li>
                    Blog
                </li>
                </Link>
                <Link href="/contact">
                <li>
                    Contact us
                </li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation