import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Link from "@mui/material/Link";

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h1"
            align="left"
            sx={{ fontSize: 40, margin: 2 }}
          >
            Weather App
            <WbSunnyOutlinedIcon fontSize="large" />
          </Typography>
          <Link href="/about" underline="none" color="inherit">
            {"About Us"}
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
