import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Container, Button } from "@material-ui/core";
import { LanguageContext } from "../../contexts/LanguageContext";
import CardItem from "./CardItem";
import coupon from "../../assets/images/coupon.png";
import location from "../../assets/images/location-icon.png";
import star from "../../assets/images/star.png";
import languageData from "./../../assets/languageData";
import LogoDivider from "../LogoDivider";

const CardGroup = ({ setValue }) => {
  const { language } = useContext(LanguageContext);
  const {
    card_1,
    card_1_desc,
    card_1_btn,
    card_2,
    card_2_desc,
    card_2_btn,
    card_3,
    card_3_desc,
    card_3_btn,
  } = languageData[language];

  const cardData = [
    {
      title: card_1,
      body: card_1_desc,
      cardImg: coupon,
      alt: "coupon",
      button: card_1_btn,
      path: "/coupon",
    },
    {
      title: card_2,
      body: card_2_desc,
      cardImg: star,
      alt: "star",
      button: card_2_btn,
      path: "/about",
    },
    {
      title: card_3,
      body: card_3_desc,
      cardImg: location,
      alt: "directions",
      button: card_3_btn,
      path: "/",
    },
  ];

  //path from cardData obj[]
  //setValue to trigger active on nav link tab
  const activeLink = (path) => {
    if (path === "/about") {
      setValue(1);
    }
    if (path === "/coupon") {
      setValue(2);
    }
    if (path === "/") {
      setValue(0);
      window.open("https://goo.gl/maps/oUhxzkZFZpzxpaHN9");
    }
  };

  return (
    <Container
      maxWidth="lg"
      component="section"
      style={{ paddingTop: "3em", paddingBottom: "3em" }}
    >
      <LogoDivider padding="0em 0em 2em 0em" />
      <Grid container justifyContent="space-evenly" spacing={3}>
        {cardData.map(({ title, body, cardImg, alt, button, path }) => (
          <React.Fragment key={title}>
            <Grid item xs={11} sm={8} md={4} lg={3} align="center">
              <CardItem title={title} body={body} cardImg={cardImg} alt={alt}>
                <Button
                  variant="outlined"
                  color="primary"
                  component={NavLink}
                  to={path}
                  onClick={() => activeLink(path)}
                >
                  <b>{button}</b>
                </Button>
              </CardItem>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default CardGroup;
