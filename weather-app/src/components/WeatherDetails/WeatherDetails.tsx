import React from "react";
import { 
    Temperature
  } from "E:/sda-project-weather-app/weather-app/weather-app/src/models/types";

export interface DetailCardProps {
    temperatureData: Temperature;
  }
const WeatherDetails: React.FC<DetailCardProps> = (props) => {
    return(
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
// const WeatherDetails: React.FC = () => {
//         return(
//         <div>
            
//         <h2>dhsuhdjs</h2>
       
//           </div>
//         );
//       };
      
//       export default WeatherDetails;
  