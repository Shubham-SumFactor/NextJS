const getUrlForCoffeeStores = (latlong, query, limit) =>{
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&limit=${limit}`
}

export const fetchCoffeeStores = async () => {
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