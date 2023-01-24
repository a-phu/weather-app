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
    }
    // else {
    //   props.setCitiesMatch([]);
    // }
    props.setNewSearch("");
  };

  const handleSelectCity = (cityName, cityCountry) => {
    props.setNewCity(cityName);
    props.setNewCountry(cityCountry);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      minWidth: "581px",
      maxWidth: "581px",
      borderRadius: "20px",
      height: "64px",
      boxShadow: "none",
      // fontFamily: "Inter",
      paddingLeft: "10px",
      "&:focus-within": {
        boxShadow: "none",
        border: "2px solid #c7c5c5",
      },
      "&:hover": {
        // backgroundColor: "#ede6f0",
        boxShadow: "none",
        border: "none",
        // border: "2px solid #DEDDFF",
      },
    }),
    input: (styles) => ({
      ...styles,
      fontFamily: "Arial, san-serif !important",
    }),
    option: (styles) => ({
      ...styles,
      maxWidth: "581px",
      borderRadius: "10px",
    }),
    menu: (styles) => ({
      ...styles,
      borderRadius: "10px",
      maxWidth: "581px",
      opacity: ".7",
      boxShadow: "none",
      border: "none",
    }),
  };

  return (
    <div className={props.className}>
      <Select
        // value={props.newSearch}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={customStyles}
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
