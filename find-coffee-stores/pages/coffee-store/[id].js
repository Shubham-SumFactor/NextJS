import { useRouter } from "next/router";
import Link from "next/link";
import CoffeeStoreData from '../../data/coffee-stores.json'

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

export function getStaticPaths(){

    return {
        paths: [
            { params: { id :'0' }},
            { params: { id :'1' }},
        ],
         fallback: true,
    };
}

const CoffeeStore = (props) =>{
    const router = useRouter();
    console.log("router", router); 

    if (router.isFallback){
        return <div>Loading....</div>
    }
    console.log("props",props);

    return <div>Coffee Store Page {router.query.id}
        
    <Link href ="/">  
   Back To home  
    </Link>
    <br></br>
    
    <Link href ="/coffee-store/dynamic">  
   Go To Dynamic Page
    </Link>
    
    <p>{props.CoffeeStore.address}</p>
    <p>{props.CoffeeStore.name}</p>

    </div>
    
};

export default CoffeeStore;