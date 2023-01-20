import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import { City } from "country-state-city";
import axios from "axios";

const App = () => {
  const [newSearch, setNewSearch] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newLatitude, setNewLatitude] = useState();
  const [newLongitude, setNewLongitude] = useState();
  // const [cityExists, setCityExists] = useState(false);

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

  const handleFilterChange = (e) => {
    setNewSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const citiesMatch = City.getAllCities()
      .filter((city) => {
        return city.name.match(newSearch);
      })
      .map((city) => city.name);

    console.log("all cities: ", citiesMatch);

    // if (citiesMatch.length === 0) {
    //   console.log("1 city exists before:", cityExists);
    //   setCityExists(false);
    //   console.log("1 city exists after:", cityExists);
    // } else {
    //   console.log("2 city exists before:", cityExists);
    //   setCityExists(true);
    //   console.log("2 city exists after:", cityExists);
    // }

    // if (cityExists) {
    setNewCity(newSearch);
    // }
    console.log("city", newCity);
    setNewSearch("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        enter city:{" "}
        <input value={newSearch} onChange={handleFilterChange}></input>
        <button type="submit">submit</button>
      </form>
      <Weather
        newCity={newCity}
        apiKey={apiKey}
        newLatitude={newLatitude}
        newLongitude={newLongitude}
      />
    </div>
  );
};

export default App;
