import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

const Header = () => {
  return (
    
    <AppBar>
      <Typography variant="h1" align="left" sx={{ fontSize: 40, margin: 2 }}>
  Weather App
      </Typography>
    </AppBar>
  );
};

export default Header;
