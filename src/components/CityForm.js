import { City } from "country-state-city";
import Select from "react-select";

const CityForm = (props) => {
  const handleFilterChange = (e) => {
    if (e !== "") {
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
    } else {
      props.setCitiesMatch([]);
    }
    props.setNewSearch("");
  };

  const handleSelectCity = (cityName, cityCountry) => {
    props.setNewCity(cityName);
    props.setNewCountry(cityCountry);
  };

  return (
    <div>
      <Select
        value={props.newSearch}
        placeholder={"enter city:"}
        noOptionsMessage={() => null}
        getOptionValue={(city) => city.label}
        onInputChange={(e) => {
          handleFilterChange(e);
        }}
        onChange={(e) => {
          handleSelectCity(e.name, e.country);
        }}
        options={props.citiesMatch.map((city) => city[0])}
      />
    </div>
  );
};

export default CityForm;
