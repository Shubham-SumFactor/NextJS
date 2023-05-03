import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


import Banner from "../components/banner";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const handleOnBannerBtnClick =() =>{
    console.log("BAnner Button")
  }
  
  return (
    <div className={styles.main}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
    
      <Banner buttonText ="View Stores Nearby" handleOnClick=
      {handleOnBannerBtnClick}/>
      </main>
    
    </div>
  )
}