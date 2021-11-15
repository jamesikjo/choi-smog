import React, { useContext } from "react";
import {
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@material-ui/core";
import { LanguageContext } from "../../contexts/LanguageContext";
import yelpLogo from "../../assets/images/yelp-logo.png";
import google from "../../assets/images/google.png";
import languageData from "./../../assets/languageData";
import LogoDivider from "../LogoDivider";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    mainHeader,
    subHeader,
    location,
    locationDesc,
    buinessHours,
    monday,
    friday,
    saturday,
    sunday,
    closed,
  } = languageData[language];

  return (
    <Container maxWidth="lg" component="section">
      <Grid container direction="column" alignItems="center">
        <Grid
          item
          style={{ marginBottom: matchSM ? "1rem" : "2rem" }}
          align="center"
        >
          <Typography
            variant={matchSM ? "h6" : "h4"}
            color="primary"
            gutterBottom
          >
            <b>{mainHeader}</b>
          </Typography>
          <Divider />
          <Typography
            variant="subtitle1"
            color="primary"
            align="center"
            style={{ marginBottom: matchSM ? "0.5rem" : "1.5rem" }}
          >
            {subHeader}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={matchSM ? 4 : undefined}
        style={{ marginBottom: "2em" }}
      >
        <Grid item container direction="column" md={4} align="center">
          <Grid item>
            <Typography variant="h5" color="primary" gutterBottom>
              <b>{buinessHours}</b>
            </Typography>
            <Typography variant="body1" color="primary">
              {monday}-{friday} : <b>9 AM – 6 PM</b>
            </Typography>
            <Typography variant="body1" color="primary">
              {saturday} : <b>9 AM – 4 PM</b>
            </Typography>
            <Typography variant="body1" color="primary">
              {sunday} : <b>{closed}</b>
            </Typography>
          </Grid>
        </Grid>

        <Grid item container md={4} direction="column" align="center">
          <Grid item>
            <Typography variant="h5" color="primary" gutterBottom>
              <b>{location}</b>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="primary">
              3225 W Olympic Blvd Ste 1 <br /> Los Angeles, CA 90006
            </Typography>
            <Typography variant="body2" color="primary">
              ({locationDesc})
            </Typography>
          </Grid>
        </Grid>
        <Grid item container md={4} alignItems="center" justifyContent="center">
          <Grid item style={{ marginRight: "1em" }}>
            <a
              href={
                "https://www.yelp.com/biz/choi-smog-test-only-center-los-angeles-3"
              }
              style={{ color: "inherit" }}
            >
              <img
                src={yelpLogo}
                alt="yelp logo"
                style={{ height: matchSM ? 50 : 65 }}
              />
            </a>
          </Grid>
          <Grid item>
            <img
              src={google}
              alt="google logo"
              style={{ height: matchSM ? 50 : 65 }}
            />
          </Grid>
        </Grid>
      </Grid>
      <LogoDivider padding="0em 0em 3em 0em" />
    </Container>
  );
};

export default Hero;
