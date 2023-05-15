import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Banner from "../components/banner";
import Card from "../components/card";
//import { fetchCoffeeStores } from '@/lib/coffee-store';
import { fetchCoffeeStores } from '../lib/coffee-store';
import CoffeeStoresData from '../data/coffee-stores.json';
import useTrackLocation from '@/hooks/use-track-location';

const inter = Inter({ subsets: ['latin'] })


export async function getStaticProps(context) { //server side

  const CoffeeStores = await fetchCoffeeStores();

  return {
    props: {
      CoffeeStores,
    }, //will be passed to the page components as props
  };
}


export default function Home(props) { //client side
  
 
 const { handleTrackLocation, latLong, locationErrorMsg, isFindingLocation } = useTrackLocation();

 console.log({latLong, locationErrorMsg});

  const handleOnBannerBtnClick =() =>{
    console.log("Banner Button")
    handleTrackLocation();

  };
  
  return (
    
    <div className={styles.container}>

      <Head>

        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>
    
      <Banner buttonText ={isFindingLocation ? "Locating..." : "View Stores Nearby"} handleOnClick={handleOnBannerBtnClick}/>
    
      {locationErrorMsg && <p>Something Went Wrong:{locationErrorMsg}</p>}
     
     
     <div className={styles.heroImage}>
            <Image src="/static/hero.png" width={680} height={300} />
      </div >
      {props.CoffeeStores.length > 0 && (
      <div className={styles.sectionWrapper}>
      
      <h2 className={styles.heading2}>Toronto Stores</h2>
     
      <div className={styles.cardLayout}>

            {props.CoffeeStores.map((CoffeeStore) => {
            
           return (
           <Card  
                key ={CoffeeStore.id}
                name={CoffeeStore.name}
                imgUrl={CoffeeStore.imgUrl ||
               "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
                href={`/coffee-store/${CoffeeStore.id}`}
           />
            );
            
        })}

      </div>
      </div>
     ) }
      </main>
    
    </div>
  )
}
