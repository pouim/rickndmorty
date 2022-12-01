import { createTheme, ThemeOptions } from "@mui/material";
import { grey, purple } from "@mui/material/colors";

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
    primary: {
      main: purple[600],
    },
    text: {
      primary: '#fff8e1',
      secondary: grey[500],
    },
  },
});
