import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import CityForm from "./components/CityForm";
import axios from "axios";

const App = () => {
  const [newSearch, setNewSearch] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newLatitude, setNewLatitude] = useState();
  const [newLongitude, setNewLongitude] = useState();
  const [cityExists, setCityExists] = useState(false);
  const [citiesMatch, setCitiesMatch] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  console.log("api key:", apiKey);

  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
          newCity +
          "&appid=" +
          apiKey
      )
      .then((response) => {
        setNewLatitude(response.data[0].lat);
        setNewLongitude(response.data[0].lon);
      });
  }, [newCity, apiKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (citiesMatch.length > 0) {
      setNewCity(newSearch.charAt(0).toUpperCase() + newSearch.slice(1));
    } else {
      alert("City doesn't exist");
    }
    setNewSearch("");
  };

  return (
    <div>
      <CityForm
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        setCitiesMatch={setCitiesMatch}
        handleSubmit={handleSubmit}
      />
      <Weather
        cityExists={cityExists}
        newCity={newCity}
        setCityExists={setCityExists}
        apiKey={apiKey}
        newLatitude={newLatitude}
        newLongitude={newLongitude}
      />
    </div>
  );
};

export default App;
