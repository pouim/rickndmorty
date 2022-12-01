import { Box, Divider, Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/pouyan-ahmadpour/"
      >
        Pouyan Ahmadpour
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <Box sx={{ p: 6 }} component="footer" data-testid="#footer-container">
      <Divider />
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
        role="textbox"
      >
        Designed & developed by
      </Typography>
      <Copyright />
    </Box>
  );
};