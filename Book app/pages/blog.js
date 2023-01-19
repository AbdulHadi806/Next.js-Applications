import React,{useEffect, useState} from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

function blog() {
  const [data, setData] =useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/api/blogs").then((a)=> {
      a.json()
      .then((parse)=> {
        setData(parse)
      })
    })
  },[])
  return (
    <div className={styles.container}>
      <div className={styles.topblogs}>
        <h2 >
          Our top blogs
        </h2>
       {data.map((item)=> {
  
        return (
          <div className={styles.blogDescription}>
        <Link href={`/blogpost/${item.search}`}>
            <h2>{item.title}</h2>
        </Link>
            <p>{item.content.substr(0, 140)}...</p>
          </div>
        )
       })}
      </div>
    </div>
  )
}

export default blog