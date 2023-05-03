import { useRouter } from "next/router";
import Link from "next/link"

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