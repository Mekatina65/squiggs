import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
    
     <h1 className={styles.title}>homepage</h1>
     <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste aliquid nostrum, cupiditate debitis laboriosam. <br /></p>
     <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste aliquid nostrum, cupiditate debitis laboriosam. <br /></p>
   
     <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste aliquid nostrum, cupiditate debitis laboriosam. <br /></p>
    
    <Link href="/contact"><a className={styles.btn}>See Contact page</a></Link>
 
    </div>
  )
}
