import { City } from "country-state-city";

const CityForm = (props) => {
  const handleFilterChange = (e) => {
    props.setNewSearch(e.target.value);

    props.setCitiesMatch(
      City.getAllCities()
        .filter((city) => {
          return city.name.toLowerCase().match(props.newSearch.toLowerCase());
        })
        .map((city) => city.name)
    );
  };

  return (
    <form onSubmit={props.handleSubmit}>
      enter city:{" "}
      <input value={props.newSearch} onChange={handleFilterChange}></input>
      <button type="submit">submit</button>
    </form>
  );
};

export default CityForm;
