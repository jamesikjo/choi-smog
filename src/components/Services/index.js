import React, { useContext } from "react";
import {
  Box,
  Container,
  Grid,
  ListItem,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
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
  serviceList: {
    listStyle: `url(@material-ui/icons/Check)`,
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
          <Grid item xs={12} md={6}>
            <Typography
              variant={matchMD ? "h5" : "h4"}
              color="primary"
              align="center"
            >
              <b>{servicesTitle}</b>
            </Typography>
            <Grid
              item
              container
              component="ul"
              style={{ paddingLeft: 0, margin: "1.5rem 0rem" }}
            >
              {services.map((s) => (
                <Grid item xs={12} md={6} key={s}>
                  <ListItem disableGutters>
                    <ListItemIcon style={{ minWidth: "40px" }}>
                      <Icon
                        icon="bi:check-lg"
                        width={30}
                        height={30}
                        color="#0071FF"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={s}
                      primaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </Grid>
              ))}
            </Grid>

            <Grid item align="center">
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
