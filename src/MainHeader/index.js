import React, { useContext } from "react";
import {
  Typography,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import { LanguageContext } from "./../contexts/LanguageContext";
import shopLogo from "./../assets/images/shop-logo.png";
import ToggleButton from "@material-ui/lab/ToggleButton";
import languageData from "../assets/languageData";

const useStyles = makeStyles((theme) => ({
  toggleButton: {
    border: "none",
    padding: 0,
    "&.MuiToggleButton-root.Mui-selected": {
      backgroundColor: "transparent",
    },
  },
}));

const MainHeader = () => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));

  const english = "https://img.icons8.com/color/48/000000/usa-circular.png";
  const korean =
    "https://img.icons8.com/color/48/000000/south-korea-circular.png";

  const handleLanguageToggle = (e, newValue) => {
    setSelected(!selected);
    setLanguage(newValue); //newValue = <ToggleButton />'s stored value after render
    document.title = languageData[newValue].title;
  };

  return (
    <Container
      maxWidth="lg"
      style={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}
      component="header"
    >
      <Grid container alignItems="flex-end">
        <Grid item xs={12} sm={6} align={matchMD ? "center" : undefined}>
          <img
            src={shopLogo}
            style={{ height: 85, width: 350 }}
            alt="shop logo"
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={6}
          alignItems="center"
          justifyContent={matchMD ? "center" : "flex-end"}
        >
          <Grid item align="end" style={{ marginRight: "0.5rem" }}>
            <Typography variant="h5" color="primary">
              <b>(213) 365-0244</b>
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              style={{
                fontSize: matchMD && 11,
              }}
            >
              <b>3225 W Olympic Blvd Ste 1 Los Angeles, CA 90006</b>
            </Typography>
          </Grid>
          <Grid item align="center">
            <ToggleButton
              value={language === "english" ? "korean" : "english"} //toggle value based on language state
              selected={selected}
              onChange={handleLanguageToggle}
              className={classes.toggleButton}
            >
              <img
                src={language === "english" ? english : korean}
                alt="english"
                style={{ width: 40, height: 40 }}
              />
            </ToggleButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainHeader;
