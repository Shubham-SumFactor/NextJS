import { findRecordByFilter } from "@/lib/airtable";


const favouriteCoffeStoreById = async (req, res) => {
    if (req.method === "PUT"){

        try {
        const { id } = req.body;

        if (id) {
            const records = await findRecordByFilter(id);
          
        if (records.length !== 0){       
            res.json(records);
        } else {
            res.json({ message: "Coffee Store Id doesn't exist", id});
        }
            
        } else {
            res.status(400);
            res.json({ message: "Id is missing "});
        }
        

   
    } catch (error){
        res.status(500);
        res.json({ message: "Error upvoting coffee store", error });
    }
    }

};

export default favouriteCoffeStoreById;