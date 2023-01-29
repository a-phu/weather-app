import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faTemperatureLow,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

const Weather = (props) => {
  const [newTemp, setNewTemp] = useState();
  const [newFeelsLike, setNewFeelsLike] = useState();
  const [newMinTemp, setNewMinTemp] = useState();
  const [newMaxTemp, setNewMaxTemp] = useState();
  const [newHumidity, setNewHumidity] = useState();
  const [newWind, setNewWind] = useState();
  const [newDesc, setNewDesc] = useState();

  useEffect(() => {
    weatherService
      .getWeather(props.newLatitude, props.newLongitude, props.apiKey)
      .then((response) => {
        setNewDesc(response.data.weather[0].description.toLowerCase());
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
  }
  //need to fix if city does not exist
  if (typeof props.newLatitude === "undefined") {
    return (
      <div>
        {/* {() => {
          alert("city does not exist");
        }} */}
      </div>
    );
  } else {
    return (
      //total weather component
      <div className={props.className}>
        <div className={props.leftClassName}>
          <Icon desc={newDesc} />
          <strong className={props.descClassName}>{newDesc} </strong>
        </div>

        <div className={props.rightClassName}>
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
          <div className={props.detailsClassName}>
            <div>
              <p>
                <FontAwesomeIcon icon={faTemperatureLow} />
                <strong> low: </strong>
                {newMinTemp}°C
              </p>
              <p>
                <FontAwesomeIcon icon={faTemperatureHigh} />
                <strong> high: </strong>
                {newMaxTemp}°C
              </p>
            </div>
            <div>
              <p className={props.textClassName}>
                <FontAwesomeIcon icon={faDroplet} />
                <strong> {"  humidity: "}</strong>
                {newHumidity}%
              </p>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faWind} /> {" wind:  "}
                </strong>
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
