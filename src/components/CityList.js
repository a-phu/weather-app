import { City } from "country-state-city";
import { v4 as uuid } from "uuid";

const CityList = (props) => {
  props.setCitiesMatch(
    City.getAllCities()
      .filter((city) => {
        return (city.name + ", " + city.countryCode).includes(props.newSearch);
      })
      .map((city) => city.name + ", " + city.countryCode)
      .slice(0, 9)
  );

  return (
    <ul>
      {props.citiesMatch.map((city) => {
        return <li key={uuid()}>name: {city}</li>;
      })}
    </ul>
  );
};

export default CityList;
