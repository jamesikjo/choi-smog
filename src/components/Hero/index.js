import React, { useContext } from "react";
import {
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
  Box,
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
    mainTitle,
    subTitle,
    caption,
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
    <Box
      sx={{
        py: matchSM ? 5 : 10,
      }}
    >
      <Container maxWidth="lg" component="section" style={{ pb: "4rem" }}>
        <Grid container direction="column" alignItems="center">
          <Grid
            item
            style={{ marginBottom: matchSM ? "1rem" : "2rem" }}
            align="center"
          >
            <Typography
              variant={matchSM ? "h5" : "h4"}
              color="primary"
              style={{ fontWeight: "bold" }}
            >
              {mainTitle}
            </Typography>
            <Divider style={{ margin: "1em 0em" }} />
            <Typography
              variant="h6"
              color="primary"
              align="center"
              gutterBottom
            >
              {subTitle}
            </Typography>

            <Typography variant="subtitle1" color="primary" align="center">
              {caption}
            </Typography>
          </Grid>
        </Grid>
        <LogoDivider padding="0em 0em 1.5em 0em" />

        <Grid container spacing={matchSM ? 4 : undefined}>
          <Grid item container direction="column" md={4} align="center">
            <Grid item>
              <Typography
                variant="h5"
                color="primary"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {buinessHours}
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
              <Typography
                variant="h5"
                color="primary"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {location}
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
          <Grid
            item
            container
            md={4}
            alignItems="center"
            justifyContent="center"
          >
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
      </Container>
    </Box>
  );
};

export default Hero;
