import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Banner from "../components/banner";
import Card from "../components/card";

import CoffeeStoresData from '../data/coffee-stores.json';

const inter = Inter({ subsets: ['latin'] })


export async function getStaticProps(context) { //server side

  return {
    props: {
      CoffeeStores: CoffeeStoresData,
    }, //will be passed to the page components as props
  };
}


export default function Home(props) { //client side
  
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
            <Image src="/static/hero.png" width={680} height={300} />
      </div >
      {props.CoffeeStores.length > 0 && (<>
      
      <h2 className={styles.heading2}>Toronto Stores</h2>
     
      <div className={styles.cardLayout}>

            {props.CoffeeStores.map((CoffeeStore) => {
            
           return (
           <Card  
           key ={CoffeeStore.id}
           name={CoffeeStore.name}
           imgUrl={CoffeeStore.imgUrl}
           href={`/coffee-store/${CoffeeStore.id}`}
           />
            );
            
})}

      </div>
      </>
     ) }
      </main>
    
    </div>
  )
}
