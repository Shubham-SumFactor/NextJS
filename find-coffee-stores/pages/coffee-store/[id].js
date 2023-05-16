import { useRouter } from "next/router";
import Link from "next/link";
import CoffeeStoreData from '../../data/coffee-stores.json'
import Head from "next/head";

import Image from "next/image";

import styles from '../../styles/coffee-store.module.css'
import cls from "classnames";
//import { fetchCoffeeStores } from "@/lib/coffee-store";
import { fetchCoffeeStores } from "../../lib/coffee-store";

export async function getStaticProps(staticProps){
    const params = staticProps.params;
  
    const CoffeeStores = await fetchCoffeeStores();
   const findCoffeeStoreById =  CoffeeStores.find((CoffeeStore) =>{
    return CoffeeStore.id.toString() === params.id; //dynamic id
});
    return {
        props: {
            CoffeeStore : findCoffeeStoreById ? findCoffeeStoreById : {} ,
        },
    };
}

export async function getStaticPaths() {
    const CoffeeStores = await fetchCoffeeStores();
    const paths = CoffeeStores.map((CoffeeStore) => {
        return {
            params: {
                id: CoffeeStore.id.toString(),
            }
        }
    });

    return { paths,
         fallback: true,
    }
}

const CoffeeStore = (props) =>{
    const router = useRouter();
    console.log("router", router); 

    if (router.isFallback){
        return <div>Loading....</div>
    }

    const {name, address , formatted_address, imgUrl} = props.CoffeeStore;

    const handleUpvoteButton = () => {
        console.log("handle Upvote")
    }
    return (
    <div className={styles.layout}>
      
        <Head>
            <title>{name}</title>
      
      
          </Head>
  <div className={styles.container}>
   <div className={styles.col1}>
   <div className={styles.backToHomeLink}>
    <Link href ="/"> 
    Back To home   
      </Link> </div>

            <div className={styles.nameWrapper}>
                <h1 className={styles.name}>{name}</h1>
            </div>
            <Image src = {imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"} 
             width={600} 
             height={360}
              className={styles.storeImg} 
              alt = {name}>
              </Image>
    </div>

    <div className={cls("glass",styles.col2)}>
       {address && (
        <div className={styles.iconWrapper}>
            <Image src="/static/icons/places.svg" width="24" height="24"/>
            <p className={styles.text}>{address}</p>
        </div>
        )}
        {formatted_address &&(
        <div className={styles.iconWrapper}>
            <Image src="/static/icons/nearMe.svg" width="24" height="24"/>
            
        <p className={styles.text}>{formatted_address}</ p>
        
        </div>
    )}
        <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" width="24" height="24"/>
            <p className={styles.text}>1</p>
        </div>
       <button className={styles.upvoteButton} onClick={handleUpvoteButton}>Up Vote!</button>
    </div>
    </div>

    </div>
    );
};

export default CoffeeStore;