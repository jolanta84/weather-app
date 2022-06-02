
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        bgcolor: "primary.main",
        color: "white"
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          {"Copyright © "}
          <Link
            color="inherit"
            underline="none"
            href="mailto:jolanta.pisulska@gmail.com"
          >
            Jolanta Pisulska
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
