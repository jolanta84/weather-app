
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Footer from "./components/Footer/Footer";
import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Weather,
  Temperature,
  weatherDefault,
  temperatureDefault,
} from "./models/types";
import Grid from "@mui/material/Grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#383636",
    },
    secondary: {
       main: "#ADD8E6" },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<Weather>(weatherDefault);
  const [temperatureData, setTemperatureData] =
    useState<Temperature>(temperatureDefault);

  const [isFetching, setIsFetching] = useState<Boolean>(true);


  // {"coord":{"lon":23,"lat":51},"weather":[{"id":802,"main":"Clouds","description":"zachmurzenie małe","icon":"03d"}],"base":"stations","main":{"temp":17.77,"feels_like":17.67,"temp_min":17.77,"temp_max":17.77,"pressure":1020,"humidity":79,"sea_level":1020,"grnd_level":992},"visibility":10000,"wind":{"speed":2.29,"deg":347,"gust":2.3},"clouds":{"all":36},"dt":1654193756,"sys":{"type":1,"id":1702,"country":"PL","sunrise":1654136317,"sunset":1654194818},"timezone":7200,"id":858785,"name":"Województwo lubelskie","cod":200}

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
    <Card className="App">
      <ThemeProvider theme={theme}>
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
                      <Grid item xs={12}>
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

              <Route
                path="*"
                element={
                  <Grid item xs={12} mt={15}>
                    <PageNotFound />
                  </Grid>
                }
              />
            </Routes>
            <Grid item xs={12} mt={5}>
              <Footer />
            </Grid>
          </Grid>
        </BrowserRouter>
      </ThemeProvider>
    </Card>
  );
};

export default App;
