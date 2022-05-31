import React from "react";
import { Temperature } from "../../models/types";

const WeatherDetails: React.FC<{temperatureData: Temperature}> = (props) => {
  return (
    <div>
      <p>{props.temperatureData.temp}</p>
      <p>{props.temperatureData.feels_like}</p>
      <p>{props.temperatureData.humidity}</p>
      <p>{props.temperatureData.temp_max}</p>
      <p>{props.temperatureData.temp_min}</p>
    </div>
  );
};

export default WeatherDetails;
