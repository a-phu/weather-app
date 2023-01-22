import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import CityForm from "./components/CityForm";
import weatherService from "./services/weatherService";

const App = () => {
  const [newSearch, setNewSearch] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newLatitude, setNewLatitude] = useState();
  const [newLongitude, setNewLongitude] = useState();
  const [citiesMatch, setCitiesMatch] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

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
      <CityForm
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        citiesMatch={citiesMatch}
        setNewCity={setNewCity}
        setNewCountry={setNewCountry}
        setCitiesMatch={setCitiesMatch}
      />
      <Weather
        newCity={newCity}
        newCountry={newCountry}
        apiKey={apiKey}
        newLatitude={newLatitude}
        newLongitude={newLongitude}
      />
    </div>
  );
};

export default App;
