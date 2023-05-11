import { createApi } from 'unsplash-js';
//import nodeFetch from 'node-fetch';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_API_KEY,
  
});


const getUrlForCoffeeStores = (latlong, query, limit) =>{
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&limit=${limit}`
}

export const fetchCoffeeStores = async () => {

  const photos= await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 30,

  });
  console.log({ photos })
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.FOURSQUARE_API_KEY
        },
      };
      
      const response = await fetch(getUrlForCoffeeStores("43.66648830062341%2C-79.41309107123831","coffee", 6 ), options);
      
      const data = await response.json();
      return data.results;
     
       // .catch(err => console.error(err));
};