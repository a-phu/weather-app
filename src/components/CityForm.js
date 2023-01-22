import { City } from "country-state-city";
import Select from "react-select";

const CityForm = (props) => {
  const handleFilterChange = (e) => {
    props.setCitiesMatch(
      City.getAllCities()
        .filter((city) => {
          return (city.name.toLowerCase() + ", " + city.countryCode).includes(
            e.toLowerCase()
          );
        })
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

  const setSearchAsInput = (cityName, cityCountry) => {
    props.setNewCity(cityName);
    props.setNewCountry(cityCountry);
  };

  return (
    <div>
      <Select
        placeholder={"enter city:"}
        getOptionValue={(city) => city.label}
        onInputChange={(e) => {
          handleFilterChange(e);
        }}
        onChange={(e) => {
          setSearchAsInput(e.name, e.country);
        }}
        options={props.citiesMatch.map((city) => city[0])}
      />
    </div>
  );
};

export default CityForm;
