import { fetchCoffeeStores } from "../../lib/coffee-store";

const getCoffeeStoresByLocation = async (req, res) => {

    // configure latlong n limit
    try {
    const { latLong, limit } =req.query; 

    const fetchedCoffeeStores = await fetchCoffeeStores(latLong, 30);
    
    res.status(200);
    res.json(response);
    }
    catch (err){
        console.error("There is an error", err);
        res.status(500);
        res.json({ message: "oh No Something went wrong ", err });
    }

    //return 
};

export default getCoffeeStoresByLocation;