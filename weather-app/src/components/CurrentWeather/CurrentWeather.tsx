import React from 'react';
import {Weather} from "E:/sda-project-weather-app/weather-app/weather-app/src/models/weather";

interface CurrentWeatherProps {
   city: string; 
   weatherData: Weather;  
  }

const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {
return (
    <> <h2>{props.city.toString()}</h2>
    <p>{props.weatherData.main}</p>
    <p>{props.weatherData.description}</p>
    <p>{props.weatherData.icon}</p>
    </>
   
)
};

export default CurrentWeather;
