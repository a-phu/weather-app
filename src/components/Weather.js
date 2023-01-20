import axios from "axios";
import { useEffect, useState } from "react";

const Weather = (props) => {
  const [newWeather, setNewWeather] = useState();
  const [newTemp, setNewTemp] = useState();
  const [newWind, setNewWind] = useState();
  const [newIcon, setNewIcon] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          props.newLatitude +
          "&lon=" +
          props.newLongitude +
          "&appid=" +
          props.apiKey +
          "&units=metric"
      )
      .then((response) => {
        setNewIcon(response.data.weather[0].icon);
        setNewTemp(response.data.main.temp);
        setNewWind(response.data.wind.speed);
        setNewWeather(response.data);
      });
  }, [props.newLatitude, props.newLongitude, props.apiKey]);

  console.log("weather: ", newWeather);
  // console.log("icon: ", newIcon);

  // if (props.cityExists === false) {
  //   return <div>No city found.</div>;
  // } else {
  return (
    <div>
      <h2>Weather in {props.newCity}</h2>
      <p>temperature {newTemp} Celsius</p>
      <img
        src={"http://openweathermap.org/img/wn/" + newIcon + ".png"}
        alt="weather-icon"
      />
      <p>wind {newWind} m/s</p>
    </div>
  );
  // }
};

export default Weather;
