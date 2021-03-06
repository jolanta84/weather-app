import React, { useState } from "react";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import { Weather, Temperature } from "../../models/types";
import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface CurrentWeatherProps {
  city: string;
  weatherData: Weather;
  temperatureData: Temperature;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setToggle(!toggle);
  };

  return (
    <Grid
      container
      spacing={5}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Card sx={{ width: 400, border: "1px solid grey" }}>
          <CardMedia
            component="img"
            height="200"
            image={`http://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`}
            alt="weather icon"
            sx={{ bgcolor: "secondary.main" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.city.toString()}
            </Typography>
            <hr />
            <Typography variant="body2" color="text.secondary" align="center">
              {props.weatherData.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" onClick={handleClick}>
              {toggle === true ? "Hide details" : "More details"}
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        mt={5}
        style={{
          visibility: toggle === true ? "visible" : "hidden",
        }}
      >
        <WeatherDetails temperatureData={props.temperatureData} />
      </Grid>
    </Grid>
  );
};

export default CurrentWeather;
