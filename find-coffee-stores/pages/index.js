import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Banner from "../components/banner";
import Card from "../components/card";

import CoffeeStoresData from '../data/coffee-stores.json';

const inter = Inter({ subsets: ['latin'] })


export async function getStaticProps(context) { //server side


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.FOURSQUARE_API_KEY
    }
  };
  
  const response = await fetch('https://api.foursquare.com/v3/places/search?query=coffee%20&ll=43.66648830062341%2C-79.41309107123831&limit=6', options);
  
  const data = await response.json();
 
   // .catch(err => console.error(err));

  return {
    props: {
      CoffeeStores: data.results ,
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
           key ={CoffeeStore.fsq_id}
           name={CoffeeStore.name}
           imgUrl={CoffeeStore.imgUrl ||
             "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
           href={`/coffee-store/${CoffeeStore.fsq_id}`}
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
