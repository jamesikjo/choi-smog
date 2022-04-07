import React, { useContext } from "react";
import {
  Typography,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import { LanguageContext } from "../../contexts/LanguageContext";
import shopLogo from "../../assets/images/shop-logo.png";
import ToggleButton from "@material-ui/lab/ToggleButton";
import languageData from "../../assets/languageData";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles({
  toggleButton: {
    border: "none",
    padding: 0,
    "&.MuiToggleButton-root.Mui-selected": {
      backgroundColor: "transparent",
    },
  },
});

const englishLogo = "https://img.icons8.com/color/48/000000/usa-circular.png";
const koreanLogo =
  "https://img.icons8.com/color/48/000000/south-korea-circular.png";

const MainHeader = () => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));

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
        <Grid item xs={12} sm={6} align={matchMD ? "center" : null}>
          <NavLink to="/">
            <img
              src={shopLogo}
              style={{ height: 75, width: 320 }}
              alt="shop logo"
            />
          </NavLink>
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
            <Typography
              variant="h5"
              color="primary"
              style={{ fontWeight: "bold" }}
            >
              (213) 365-0244
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              style={{
                fontSize: matchMD && 11,
                fontWeight: "600",
              }}
            >
              3225 W Olympic Blvd Ste 1 Los Angeles, CA 90006
            </Typography>
          </Grid>
          <Grid item align="center">
            <ToggleButton
              //toggle value based on language state
              value={language === "english" ? "korean" : "english"}
              selected={selected}
              onChange={handleLanguageToggle}
              className={classes.toggleButton}
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src={language === "english" ? englishLogo : koreanLogo}
                alt="english"
                style={{ width: 40, height: 40 }}
              />
              <KeyboardArrowDownIcon />
            </ToggleButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainHeader;
