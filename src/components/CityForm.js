import { City } from "country-state-city";
// import { useState } from "react";
import Select from "react-select";
import { v4 as uuid } from "uuid";

const CityForm = (props) => {
  const handleFilterChange = (e) => {
    console.log("length of text:", e.target.value.length);
    //when input value changes, page rerenders to update newSearch
    //which will then also update citiesMatch
    props.setNewSearch(e.target.value);
    props.setCitiesMatch(
      City.getAllCities()
        .filter((city) => {
          //find what matches input value - returns a subset of original array
          //based on criteria (removes items that don't satisfy condition)
          return (city.name.toLowerCase() + ", " + city.countryCode).includes(
            e.target.value.toLowerCase()
          );
        })
        //what is added to array (returns a new array) - based on info from
        //original array (applies fn on each element on array & returns a
        //new array w/ same length)
        .map((city) => [
          {
            name: city.name,
            country: city.countryCode,
            label: city.name + ", " + city.countryCode,
          },
        ])
        .slice(0, 9)
    );
  };

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  const setSearchAsInput = (cityName, cityCountry) => {
    props.setNewCity(cityName);
    props.setNewCountry(cityCountry);
  };

  // const citiesMatched = props.citiesMatch;

  // console.log("cities matched: ", props.citiesMatch[0]);
  // console.log("options matched: ", options);

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        enter city:{" "}
        <input value={props.newSearch} onChange={handleFilterChange}></input>
        <button type="submit">submit</button>
      </form>
      <Select
        onChange={(e) => {
          props.setNewCity(e.name);
          props.setNewCountry(e.country);
        }}
        options={props.citiesMatch.map((city) => city[0])}
      />
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
