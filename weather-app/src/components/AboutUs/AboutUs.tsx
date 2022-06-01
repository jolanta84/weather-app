import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const AboutUs = () => {
  return (
    <>
      <Grid item xs={12} m={10}>
        Weather is the state of the atmosphere, describing for example the
        degree to which it is hot or cold, wet or dry, calm or stormy, clear or
        cloudy.[1] On Earth, most weather phenomena occur in the lowest layer of
        the planet's atmosphere, the troposphere,[2][3] just below the
        stratosphere. Weather refers to day-to-day temperature, precipitation,
        and other atmospheric conditions, whereas climate is the term for the
        averaging of atmospheric conditions over longer periods of time.[4] When
        used without qualification, "weather" is generally understood to mean
        the weather of Earth. Weather is driven by air pressure, temperature,
        and moisture differences between one place and another. These
        differences can occur due to the Sun's angle at any particular spot,
        which varies with latitude. The strong temperature contrast between
        polar and tropical air gives rise to the largest scale atmospheric
        circulations: the Hadley cell, the Ferrel cell, the polar cell, and the
        jet stream. Weather systems in the middle latitudes, such as
        extratropical cyclones, are caused by instabilities of the jet
        streamflow. Because Earth's axis is tilted relative to its orbital plane
        (called the ecliptic), sunlight is incident at different angles at
        different times of the year. On Earth's surface, temperatures usually
        range ±40 °C (-40 °F to 104 °F) annually. Over thousands of years,
        changes in Earth's orbit can affect the amount and distribution of solar
        energy received by Earth, thus influencing long-term climate and global
        climate change. Surface temperature differences in turn cause pressure
        differences. Higher altitudes are cooler than lower altitudes, as most
        atmospheric heating is due to contact with the Earth's surface while
        radiative losses to space are mostly constant. Weather forecasting is
        the application of science and technology to predict the state of the
        atmosphere for a future time and a given location. Earth's weather
        system is a chaotic system; as a result, small changes to one part of
        the system can grow to have large effects on the system as a whole.
        Human attempts to control the weather have occurred throughout history,
        and there is evidence that human activities such as agriculture and
        industry have modified weather patterns Studying how the weather works
        on other planets has been helpful in understanding how weather works on
        Earth. A famous landmark in the Solar System, Jupiter's Great Red Spot,
        is an anticyclonic storm known to have existed for at least 300 years.
        However, the weather is not limited to planetary bodies. A star's corona
        is constantly being lost to space, creating what is essentially a very
        thin atmosphere throughout the Solar System. The movement of mass
        ejected from the Sun is known as the solar wind.
      </Grid>
      <Button variant="outlined">
        <Link href="/" underline="none" color="inherit">
          {"Check weather"}
        </Link>
      </Button>
    </>
  );
};

export default AboutUs;
