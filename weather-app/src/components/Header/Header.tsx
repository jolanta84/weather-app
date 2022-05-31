import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const Header = () => {
  return (
    
    <AppBar>
      {/* <WbSunnyOutlinedIcon /> */}
      <Typography variant="h1" align="left" sx={{ fontSize: 40, margin: 2 }}>
  Weather App
      </Typography>
    </AppBar>
  );
};

export default Header;
