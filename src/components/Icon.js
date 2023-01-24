import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudBolt,
  faSnowflake,
  faTornado,
  faSmog,
  faVolcano,
  faHurricane,
} from "@fortawesome/free-solid-svg-icons";

const Icon = (props) => {
  const thunderstorm = [
    "thunderstorm with light rain",
    "thunderstorm with rain",
    "thunderstorm with heavy rain",
    "light thunderstorm",
    "thunderstorm",
    "heavy thunderstorm",
    "ragged thunderstorm",
    "thunderstorm with light drizzle",
    "thunderstorm with drizzle",
    "thunderstorm with heavy drizzle",
  ];

  const clouds = [
    "few clouds",
    "scattered clouds",
    "broken clouds",
    "overcast clouds",
  ];

  const drizzle = [
    "light intensity drizzle",
    "drizzle",
    "heavy intensity drizzle",
    "light intensity drizzle rain",
    "drizzle rain",
    "heavy intensity drizzle rain",
    "shower rain and drizzle",
    "heavy shower rain and drizzle",
    "shower drizzle",
  ];

  const rain = [
    "light rain",
    "moderate rain",
    "heavy intensity rain",
    "very heavy rain",
    "extreme rain",
    "freezing rain",
    "light intensity shower rain",
    "shower rain",
    "heavy intensity shower rain",
    "ragged shower rain",
  ];

  const snow = [
    "light snow",
    "snow",
    "heavy snow",
    "sleet",
    "light shower sleet",
    "shower sleet",
    "light rain and snow",
    "rain and snow",
    "light shower snow",
    "shower snow",
    "heavy shower snow",
  ];

  const smog = ["mist", "fog", "smoke", "haze", "dust"];

  const tornado = ["sand", "sand/ dust whirls", "tornado"];

  const sun = ["clear sky"];

  const volcano = ["volcanic ash"];

  const squalls = ["squalls"];

  if (clouds.includes(props.desc)) {
    return (
      <div className="cloud-icon">
        <FontAwesomeIcon icon={faCloud} />
      </div>
    );
  }
  if (sun.includes(props.desc)) {
    return (
      <div className="sun-icon">
        <FontAwesomeIcon icon={faCircle} />
      </div>
    );
  }
  if (thunderstorm.includes(props.desc)) {
    return (
      <div className="thunderstorm-icon">
        <FontAwesomeIcon icon={faCloudBolt} />
      </div>
    );
  }
  if (drizzle.includes(props.desc)) {
    return (
      <div className="drizzle-icon">
        <FontAwesomeIcon icon={faCloudRain} />
      </div>
    );
  }
  if (rain.includes(props.desc)) {
    return (
      <div className="rain-icon">
        <FontAwesomeIcon icon={faCloudShowersHeavy} />
      </div>
    );
  }
  if (snow.includes(props.desc)) {
    return (
      <div className="snow-icon">
        <FontAwesomeIcon icon={faSnowflake} />
      </div>
    );
  }
  if (tornado.includes(props.desc)) {
    return (
      <div className="tornado-icon">
        <FontAwesomeIcon icon={faTornado} />
      </div>
    );
  }
  if (smog.includes(props.desc)) {
    return (
      <div className="smog-icon">
        <FontAwesomeIcon icon={faSmog} />
      </div>
    );
  }
  if (volcano.includes(props.desc)) {
    return (
      <div className="volcano-icon">
        <FontAwesomeIcon icon={faVolcano} />
      </div>
    );
  }
  if (squalls.includes(props.desc)) {
    return (
      <div className="squalls-icon">
        <FontAwesomeIcon icon={faHurricane} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Icon;
