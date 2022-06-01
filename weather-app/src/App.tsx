import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Weather,
  Temperature,
  Coordinate,
  weatherDefault,
  temperatureDefault,
} from "./models/types";
import Grid from "@mui/material/Grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { coordinatesDefault } from './models/types';
import AboutUs from "./components/AboutUs/AboutUs";
import PageNotFound from "./components/PageNotFound/PageNotFound";

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

         
        })
        .catch((error) => console.log("Error"));
    }
  }, [city]);

  return (
    <div className="App">
      <BrowserRouter>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Routes>
            <Route
              path="/"
              element={
                <Grid item xs={12} m={10}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <Search setCity={setCity} />
                    </Grid>
                    {!isFetching && (
                      <Grid item xs={12} m={5}>
                        <CurrentWeather
                          city={city}
                          weatherData={weatherData}
                          temperatureData={temperatureData}
                         
                        />
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              }
            />
              <Route
              path="/about"
              element={
                <Grid item xs={12}>
                  <AboutUs />{" "}
                </Grid>
              }
            />
              
                <Route path="*" element={<Grid item xs={12}><PageNotFound /></Grid>} />
          </Routes>
          
        </Grid>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
