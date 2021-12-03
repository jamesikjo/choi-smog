import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"],
  },
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#e7e7e7",
    },
  },
});

theme.overrides = {
  MuiDivider: {
    root: {
      width: "2em",
      backgroundColor: "#333",
      margin: "0.5em auto",
    },
    vertical: {
      backgroundColor: "#fff",
    },
  },
};

export default theme;
