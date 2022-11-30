import { createTheme, ThemeOptions } from "@mui/material";
import { purple } from "@mui/material/colors";

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
    primary: {
      main: purple[800],
    },
    text: {
      primary: '#fff8e1',
      secondary: '#fff8e1',
    },
  },
});
