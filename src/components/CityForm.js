import { City } from "country-state-city";
// import { useState } from "react";
import { v4 as uuid } from "uuid";

const CityForm = (props) => {
  // const [showCities, setShowCities] = useState(false);
  const handleFilterChange = (e) => {
    console.log("length of text:", e.target.value.length);
    //when input value changes, page rerenders to update newSearch
    //which will then also update citiesMatch
    props.setNewSearch(e.target.value);
    props.setCitiesMatch(
      City.getAllCities()
        .filter((city) => {
          //find what matches input value
          return (city.name.toLowerCase() + ", " + city.countryCode).includes(
            e.target.value.toLowerCase()
          );
        })
        //what is added to array
        .map((city) => [{ name: city.name, country: city.countryCode }])
        .slice(0, 9)
    );
  };

  const setSearchAsInput = (cityName, cityCountry) => {
    props.setNewCity(cityName);
    props.setNewCountry(cityCountry);
  };

  console.log("cities matched: ", City.getAllCities());

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        enter city:{" "}
        <input value={props.newSearch} onChange={handleFilterChange}></input>
        <button type="submit">submit</button>
      </form>
      <ul>
        {props.citiesMatch.map((city) => {
          return (
            <li
              onClick={() => {
                console.log("clicked: " + city[0].name);
                setSearchAsInput(city[0].name, city[0].country);
              }}
              key={uuid()}
            >
              name: {city[0].name}, {city[0].country}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CityForm;
