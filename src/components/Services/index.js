import React, { useContext } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { LanguageContext } from "../../contexts/LanguageContext";
import starLogo from "../../assets/images/star-logo.png";
import AwesomeSlider from "react-awesome-slider";
import languageData from "./../../assets/languageData";
import "react-awesome-slider/dist/styles.css";
import { servicePhotos } from "./servicePhotos";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    padding: "8em 0em",
    [theme.breakpoints.down("md")]: {
      padding: "4em 0em",
    },
  },
  starLogo: {
    width: 180,
    height: 40,
    borderRadius: 5,
  },
}));

const Services = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = useContext(LanguageContext);
  const { servicesTitle, services } = languageData[language];

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid
            container
            item
            direction="column"
            xs={12}
            md={6}
            alignItems="center"
          >
            <Grid item align="center" style={{ marginBottom: "1.5em" }}>
              <Typography variant={matchMD ? "h5" : "h4"} color="primary">
                <b>{servicesTitle}</b>
              </Typography>
              <Divider />
              <Typography
                component="ul"
                color="primary"
                align="left"
                style={{ paddingLeft: 15 }}
              >
                {services.map((s) => (
                  <Typography
                    component="li"
                    variant={matchMD ? "subtitle2" : "subtitle1"}
                    key={s}
                  >
                    {s}
                  </Typography>
                ))}
              </Typography>
            </Grid>

            <Grid item>
              <img
                src={starLogo}
                alt="star logo"
                className={classes.starLogo}
              />
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            align="center"
            style={{ padding: matchMD && "2rem 0rem" }}
          >
            <AwesomeSlider style={{ maxWidth: 500 }}>
              {servicePhotos.map((p, idx) => (
                <div key={idx} data-src={p} style={{ borderRadius: 5 }} />
              ))}
            </AwesomeSlider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
