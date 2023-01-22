import { useEffect, useState } from "react";
import { City } from "country-state-city";
import Weather from "./components/Weather";
import CityForm from "./components/CityForm";
import weatherService from "./services/weatherService";

const App = () => {
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newLatitude, setNewLatitude] = useState();
  const [newLongitude, setNewLongitude] = useState();
  const [citiesMatch, setCitiesMatch] = useState(
    City.getAllCities()
      .map((city) => [
        {
          name: city.name,
          country: city.countryCode,
          label: city.name + ", " + city.countryCode,
        },
      ])
      .slice(0, 9)
  );
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
