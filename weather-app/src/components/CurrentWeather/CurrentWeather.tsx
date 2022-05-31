
import React, { useState } from "react";

import {
  Weather,
  Temperature,
} from "E:/sda-project-weather-app/weather-app/weather-app/src/models/types";
// import {Weather} from ".././models/types";

interface CurrentWeatherProps {
  city: string;
  weatherData: Weather;
  temperatureData: Temperature;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div
      style={{
        visibility: props.city === "" ? "hidden" : "visible",
      }}
    ><div>
      <h2>{props.city.toString()}</h2>
      <p>{props.weatherData.main}</p>
      <p>{props.weatherData.description}</p>
      <p>{props.weatherData.icon}</p>
      <p>{props.temperatureData.temp}</p>
      <p>{props.temperatureData.feels_like}</p>
      <p>{props.temperatureData.humidity}</p>
      <p>{props.temperatureData.temp_max}</p>
      <p>{props.temperatureData.temp_min}</p>
  <button
        
          onClick={handleClick}
        >
          {toggle === true ? "Hide details" : "More details"}
        </button></div>
        <div
        style={{
          visibility: toggle === true ? "visible" : "hidden",
        }}
      >
     Dane
      </div>
    </div>
  );
};

export default CurrentWeather;