import { AppBar, Toolbar, Typography } from "@mui/material";

import MortyIcon from "components/icons/Morty";

export const Header = () => {
  return (
    <AppBar position="relative" data-testid="#header-container">
      <Toolbar>
        <MortyIcon />
        <Typography
          sx={{ fontStyle: "italic" }}
          variant="h4"
          color="inherit"
          noWrap
          role="textbox"
        >
          Rick and Morty
        </Typography>
      </Toolbar>
    </AppBar>
  );
};