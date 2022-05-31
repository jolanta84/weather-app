import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Weather,
  Temperature,
  weatherDefault,
  temperatureDefault,
} from "./models/types";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<Weather>(weatherDefault);
  const [temperatureData, setTemperatureData] =
    useState<Temperature>(temperatureDefault);
  const [isFetching, setIsFetching] = useState<Boolean>(true);

  // https://api.openweathermap.org/data/2.5/weather?q=glwice&appid=0f49db41c8ba9fd435696694d7607902&units=metric&lang=pl

  const API_URL = "https://api.openweathermap.org/data/2.5/";
  const API_KEY = "0f49db41c8ba9fd435696694d7607902";

  useEffect(() => {
    if (city) {
      axios
        .get(
          `${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric&lang=pl`
        )
        .then((res) => {
          setWeatherData(res.data.weather[0]);
          setTemperatureData(res.data.main);
          setIsFetching(false);

          console.log(res.data);
        })
        .catch((error) => console.log("Error"));
    }
  }, [city]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search setCity={setCity} />
                {!isFetching && (

                <CurrentWeather
                  city={city}
                  weatherData={weatherData}
                  temperatureData={temperatureData}
                                  />)}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
