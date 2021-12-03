import React, { useContext, useRef } from "react";
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
  Button,
} from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { LanguageContext } from "../../contexts/LanguageContext";
import languageData from "./../../assets/languageData";
import starLogo from "../../assets/images/star-logo.png";
import { servicePhotos } from "./servicePhotos";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const customSlider = useRef();
  const classes = useStyles();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));
  const { language } = useContext(LanguageContext);
  const { servicesTitle, services } = languageData[language];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    marginRight: "5px",
  };

  const previous = () => {
    customSlider.current.slickNext();
  };

  const next = () => {
    customSlider.current.slickPrev();
  };

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              color="primary"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              {servicesTitle}
            </Typography>
            <Grid
              item
              container
              justifyContent="center"
              style={{ paddingLeft: 0, margin: "1rem 0rem" }}
            >
              {services.map((s) => (
                <Grid item xs={12} sm={6} key={s}>
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

          <Grid item xs={12} md={6} align="center">
            <div>
              <Slider {...settings} ref={customSlider}>
                {servicePhotos.map((p, idx) => (
                  <div key={idx}>
                    <img
                      src={p}
                      alt={idx}
                      style={{
                        width: "95%",
                        height: 350,
                        objectFit: matchMD ? "contain" : "cover",
                        borderRadius: 10,
                        marginTop: "1.5em",
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div>
              <Button
                onClick={next}
                variant="outlined"
                style={{ marginRight: "5px" }}
              >
                <KeyboardArrowLeftIcon />
              </Button>
              <Button onClick={previous} variant="outlined">
                <KeyboardArrowRightIcon />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
