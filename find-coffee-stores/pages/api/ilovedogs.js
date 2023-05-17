export default function Ilovedogs(req, res){

    console.log(req.query)
const query = req.query.breed;
console.log(query);
res.status(200).json({message: `i Love ${query}`});

} ;

//http://localhost:3000/api/ilovedogs?breed=Golden%20Doodles
//%20 shows the space character in the search url/ search bar