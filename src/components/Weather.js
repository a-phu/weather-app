import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";

const Weather = (props) => {
  const [newTemp, setNewTemp] = useState();
  const [newFeelsLike, setNewFeelsLike] = useState();
  const [newMinTemp, setNewMinTemp] = useState();
  const [newMaxTemp, setNewMaxTemp] = useState();
  const [newHumidity, setNewHumidity] = useState();
  const [newWind, setNewWind] = useState();
  const [newDesc, setNewDesc] = useState();
  const [newIcon, setNewIcon] = useState();

  useEffect(() => {
    weatherService
      .getWeather(props.newLatitude, props.newLongitude, props.apiKey)
      .then((response) => {
        setNewIcon(response.data.weather[0].icon);
        setNewDesc(response.data.weather[0].description);
        setNewTemp(Math.round(response.data.main.temp));
        setNewFeelsLike(Math.round(response.data.main.feels_like));
        setNewMinTemp(Math.round(response.data.main.temp_min));
        setNewMaxTemp(Math.round(response.data.main.temp_max));
        setNewHumidity(Math.round(response.data.main.humidity));
        setNewWind(Math.round(response.data.wind.speed));
      });
  }, [props.newLatitude, props.newLongitude, props.apiKey]);

  if (props.newCity === "") {
    return <div></div>;
  } else {
    return (
      //total weather component
      <div className={props.className}>
        {/*left */}
        <div className={props.leftClassName}>
          <img
            src={"http://openweathermap.org/img/wn/" + newIcon + ".png"}
            alt="weather-icon"
          />
          {/* <p className={props.descClassName}> */}
          <strong className={props.descClassName}>{newDesc} </strong>
        </div>
        {/*right */}
        <div className={props.rightClassName}>
          {/* temp, city, feels like */}

          <div className={props.righttopClassName}>
            <p className={props.tempClassName}>{newTemp}°C </p>

            <div className={props.cityClassName}>
              <p className={props.borderClassName}>
                {props.newCity}, {props.newCountry}
              </p>
              <p className={props.borderClassName}>
                <strong> feels like: </strong>
                {newFeelsLike}°C
              </p>
            </div>
          </div>

          {/* forecast details */}
          <div className={props.detailsClassName}>
            <div>
              <p>
                <strong>low: </strong>
                {newMinTemp}°C
              </p>
              <p>
                <strong>high: </strong>
                {newMaxTemp}°C
              </p>
            </div>

            <div>
              <p>
                <strong>humidity: </strong>
                {newHumidity}
              </p>
              <p>
                <strong>wind: </strong>
                {newWind} m/s
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;
