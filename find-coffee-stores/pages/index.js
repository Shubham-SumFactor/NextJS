import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Banner from "../components/banner";
import Card from "../components/card";

import CoffeeStores from '../data/coffee-stores.json';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const handleOnBannerBtnClick =() =>{
    console.log("BAnner Button")
  }
  
  return (
    
    <div className={styles.container}>

      <Head>

        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>
    
      <Banner buttonText ="View Stores Nearby" handleOnClick={handleOnBannerBtnClick}/>
      
     
     <div className={styles.heroImage}>
            <Image src="/static/hero.png" width={700} height={400} />
      </div >

      <div className={styles.cardLayout}>

            {CoffeeStores.map(CoffeeStore => {
            
           return  <Card 
            name={CoffeeStore.name}
             imgUrl={CoffeeStore.imgUrl}
              href={`/coffee-store/${CoffeeStore.id}`}
              />
})}

      </div>
      </main>
    
    </div>
  )
}
