import { useRouter } from "next/router";
import Link from "next/link";
import CoffeeStoreData from '../../data/coffee-stores.json'

export function getStaticProps(staticProps){
    const params = staticProps.params;

    return {
        props: {
            CoffeeStore : CoffeeStoreData.find(CoffeeStore =>{
                return CoffeeStore.id === params.id //dynamic id
            }),
        },
    };
}

export function getStaticPaths(){

    return {
        paths: [
            { params: { id :'0' }},
            { params: { id :'1' }},
        ]
         
    };
}

const CoffeeStore = () =>{
    const router = useRouter();
    console.log("router", router); 

    return <div>Coffee Store Page {router.query.id}
        
    <Link href ="/">  
   Back To home  
    </Link>
    <br></br>
    
    <Link href ="/coffee-store/dynamic">  
   Go To Dynamic Page
    </Link>
    
    
    </div>
    
};

export default CoffeeStore;