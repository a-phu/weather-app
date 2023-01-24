import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import CityForm from "./components/CityForm";
// import { Header } from "react-native-elements";

import "./App.css";
import weatherService from "./services/weatherService";

const App = () => {
  const [newSearch, setNewSearch] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newLatitude, setNewLatitude] = useState();
  const [newLongitude, setNewLongitude] = useState();
  const [citiesMatch, setCitiesMatch] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const weekdayOptions = { weekday: "long" };
  const todayDate =
    new Date().toLocaleDateString("en-GB", weekdayOptions).toLowerCase() +
    " " +
    new Date().toLocaleDateString("en-GB", dateOptions).toLowerCase();

  console.log("today's date: ", todayDate);

  useEffect(() => {
    weatherService
      .getCoordinates(newCity, newCountry, apiKey)
      .then((response) => {
        setNewLatitude(response.data[0].lat);
        setNewLongitude(response.data[0].lon);
      });
  }, [newCity, newCountry, apiKey]);

  return (
    <div>
      <div className="header">
        <p className="header-text">DAILY WEATHER FORECAST</p>
        <p className="header-text">{todayDate}</p>
      </div>
      <div className="body">
        <CityForm
          newSearch={newSearch}
          setNewSearch={setNewSearch}
          citiesMatch={citiesMatch}
          setNewCity={setNewCity}
          setNewCountry={setNewCountry}
          setCitiesMatch={setCitiesMatch}
        />
        {/* <div className="weather-container"></div> */}
        <Weather
          icon="icon"
          className="weather"
          descClassName="desc"
          leftClassName="left-weather"
          rightClassName="right-weather"
          righttopClassName="right-top-weather"
          cityClassName="city"
          textClassName="text"
          forecastClassName="weather-forecast"
          detailsClassName="weather-details"
          tempClassName="temp"
          newCity={newCity}
          newCountry={newCountry}
          apiKey={apiKey}
          newLatitude={newLatitude}
          newLongitude={newLongitude}
        />
      </div>
    </div>
  );
};

export default App;
