import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import React, { useEffect, useState } from 'react'; 
import axios from "axios";
import  {Weather, weatherDefault}  from "./models/weather";

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<Weather>(weatherDefault);

  console.log('App.tsx start');

  // const [isFetching, setIsFetching] = useState(true);

  // https://api.openweathermap.org/data/2.5/weather?q=glwice&appid=0f49db41c8ba9fd435696694d7607902&units=metric&lang=pl

  const API_URL = 'https://api.openweathermap.org/data/2.5/';
  const API_KEY = '0f49db41c8ba9fd435696694d7607902';

  useEffect(() => {
    // if (city) {

      axios
        .get(`${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric&lang=pl`)
        .then((res) => {
          console.log(res.data);
          setWeatherData(res.data.weather[0]);
          
          // setWeatherData(res.data.weather);
         
          console.log(res.data);
          
       
        // setIsFetching(false);
        })
        .catch(error => console.log("Error"));
    // }
  }, [city]);


  return (
    <div className="App">
      <Header />
      <Search setCity={setCity}  />
      <CurrentWeather city={city}   weatherData={weatherData}/>
    </div>
  );
};

export default App;
