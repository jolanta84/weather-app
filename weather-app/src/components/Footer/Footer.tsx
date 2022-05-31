import React from "react";
import Typography from "@mui/material/Typography/Typography";
import Link from "@mui/material/Link";

const Footer: React.FC = () => {
  return (
    <footer style={{ position: "fixed", bottom: 0 }}>
      <Typography variant="h2" sx={{ fontSize: 30 }}>
            Developed By 
        <Link href="mailto:jolanta.pisulska@gmail.com" underline="none" color="inherit">
          Jolanta Pisulska
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
