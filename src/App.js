import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import CityForm from "./components/CityForm";
import weatherService from "./services/weatherService";
// import Select from "react-select";

const App = () => {
  const [newSearch, setNewSearch] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const [newLatitude, setNewLatitude] = useState();
  const [newLongitude, setNewLongitude] = useState();
  // const [cityExists, setCityExists] = useState(false);
  const [citiesMatch, setCitiesMatch] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  // const sydneyData = [
  //   {
  //     coord: {
  //       lon: 151.2093,
  //       lat: -33.8688,
  //     },
  //     weather: [
  //       {
  //         id: 803,
  //         main: "Clouds",
  //         description: "broken clouds",
  //         icon: "04d",
  //       },
  //     ],
  //     base: "stations",
  //     main: {
  //       temp: 297.1,
  //       feels_like: 297.17,
  //       temp_min: 294.75,
  //       temp_max: 299.6,
  //       pressure: 1017,
  //       humidity: 62,
  //     },
  //     visibility: 10000,
  //     wind: {
  //       speed: 7.2,
  //       deg: 110,
  //     },
  //     clouds: {
  //       all: 75,
  //     },
  //     dt: 1674265256,
  //     sys: {
  //       type: 2,
  //       id: 2002865,
  //       country: "AU",
  //       sunrise: 1674241494,
  //       sunset: 1674292032,
  //     },
  //     timezone: 39600,
  //     id: 6619279,
  //     name: "Sydney",
  //     cod: 200,
  //   },
  // ];

  useEffect(() => {
    weatherService
      .getCoordinates(newCity, newCountry, apiKey)
      .then((response) => {
        setNewLatitude(response.data[0].lat);
        setNewLongitude(response.data[0].lon);
      });
  }, [newCity, newCountry, apiKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("total cities:", citiesMatch);
    setNewSearch("");
  };

  // citiesMatch.map((city, index) => {
  //   return console.log("name of city: ", city[0].name);
  // });
  // console.log("cities matched: ", citiesMatch);
  // console.log("cities matched index: ", citiesMatch[2][0].name);
  //citiesMatch[0] returns the first array which contains an object
  //ohhh and each array has 1 object which is at index 0
  //so citiesMatch could be
  //[[{name: Sydenham, country: AU}], [{name: Sydney, country: AU}]]
  //and citiesMatch.map(city) = each city is each array inside the main array
  //[{name: Sydenham, country: AU}]
  //and city[0] refers to the first object in the internal array
  //{name: Sydenham, country: AU}
  //and city[0].name refers to "Sydenham"
  return (
    <div>
      <CityForm
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        citiesMatch={citiesMatch}
        setNewCity={setNewCity}
        setNewCountry={setNewCountry}
        setCitiesMatch={setCitiesMatch}
        handleSubmit={handleSubmit}
      />
      {/* <Select options={citiesMatch} /> */}
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
