import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

function slug() {
    const router = useRouter()
    const [blogs, setBlogs] = useState()
    useEffect(()=> {
      if(!router.isReady) return;
    const {slug} = router.query
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=> {
        a.json()
        .then((parse)=> {
          console.log(parse)
          setBlogs(parse)
        })
      })
    },[router.isReady])
  return (
    <div className={styles.container}>
        <h1>
            {blogs && blogs.title}
        </h1>
        <hr />
        <p>
           {blogs && blogs.content}
        </p>
    </div>
  )
}

export default slug