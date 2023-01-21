import axios from "axios";
import { useEffect, useState } from "react";

const Weather = (props) => {
  const [newTemp, setNewTemp] = useState();
  const [newMinTemp, setNewMinTemp] = useState();
  const [newMaxTemp, setNewMaxTemp] = useState();
  const [newWind, setNewWind] = useState();
  const [newDesc, setNewDesc] = useState();
  const [newIcon, setNewIcon] = useState();
  const [newWeather, setNewWeather] = useState([]);

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
        setNewDesc(response.data.weather[0].description);
        setNewTemp(response.data.main.temp);
        setNewMinTemp(response.data.main.temp_min);
        setNewMaxTemp(response.data.main.temp_max);
        setNewWind(response.data.wind.speed);
        setNewWeather(response.data);
      });
  }, [props.newLatitude, props.newLongitude, props.apiKey]);

  console.log("weather: ", newWeather);

  if (props.newCity === "") {
    return <div></div>;
  } else {
    return (
      <div>
        <h1>Weather in {props.newCity} for today</h1>
        <h2>{newDesc}</h2>
        <img
          src={"http://openweathermap.org/img/wn/" + newIcon + ".png"}
          alt="weather-icon"
        />
        <p>Current temp: {newTemp}°C</p>
        <p>Lowest temp: {newMinTemp}°C</p>
        <p>Highest temp: {newMaxTemp}°C</p>
        <p>Wind {newWind} m/s</p>
      </div>
    );
  }
};

export default Weather;
