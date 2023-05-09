import { useRouter } from "next/router";
import Link from "next/link";
import CoffeeStoreData from '../../data/coffee-stores.json'
import Head from "next/head";

export function getStaticProps(staticProps){
    const params = staticProps.params;

    return {
        props: {
            CoffeeStore : CoffeeStoreData.find((CoffeeStore) =>{
                return CoffeeStore.id.toString() === params.id; //dynamic id
            }),
        },
    };
}

export function getStaticPaths() {
    const paths = CoffeeStoreData.map((CoffeeStore) => {
        return {
            params: {
                id: CoffeeStore.id.toString(),
            },
        }
    });
    return { paths,
         fallback: true,
    };
}

const CoffeeStore = (props) =>{
    const router = useRouter();
    console.log("router", router); 

    if (router.isFallback){
        return <div>Loading....</div>
    }

    const {address, name, neighbourhood} = props.CoffeeStore;

    console.log("props",props);

    return (<div>
        <Head><title>{name}</title></Head>
   
    <Link href ="/">  
   Back To home  
    </Link>
    <br></br>
    
    <p>{address}</p>
    <p>{name}</p>
    <p>{neighbourhood}</p>
    </div>
    );
};

export default CoffeeStore;