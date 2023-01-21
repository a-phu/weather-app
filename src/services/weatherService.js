import axios from "axios";

const getCoordinates = (newCity, apiKey) => {
  const coordinatesUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    newCity +
    "&appid=" +
    apiKey;

  return axios.get(coordinatesUrl);
};

const getWeather = (newLatitude, newLongitude, apiKey) => {
  const weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    newLatitude +
    "&lon=" +
    newLongitude +
    "&appid=" +
    apiKey +
    "&units=metric";

  return axios.get(weatherUrl);
};

export default {
  getCoordinates: getCoordinates,
  getWeather: getWeather,
};
