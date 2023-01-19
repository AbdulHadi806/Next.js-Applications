import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
      <h1>Coding Hunter blog by a coding Hunter</h1>
      <div className={styles.topblogs}>
        <h2 >
          Our top blogs
        </h2>
        <div className={styles.blogDescription}>
          <h3>How to learn JAVASCRIPT in 2023</h3>
          <p>Javascript is a language uesd to create logic for the web</p>
        </div>
        <div className={styles.blogDescription}>
          <h3>How to learn JAVASCRIPT in 2023</h3>
          <p>Javascript is a language uesd to create logic for the web</p>
        </div>
        <div className={styles.blogDescription}>
          <h3>How to learn JAVASCRIPT in 2023</h3>
          <p>Javascript is a language uesd to create logic for the web</p>
        </div>
      </div>
      </div>
    </div>
  )
}
