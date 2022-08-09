// header("Access-Control-Allow-Origin: *");
const key = "tXDMAPbtLJfWhawBfRjDpbvO5Y3wFf1Q";
// Get Weather information
const getWeather = async (id) => {
  // A promise for fetching the weather information of the city using the key
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  //   Return The entire city
  return data[0];
};

const getCity = async (city) => {
  //A promise for fetching information about the entered city
  const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);

  const data = await response.json();

  return data[0];
};
