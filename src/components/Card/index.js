import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Container, Button } from "@material-ui/core";
import { LanguageContext } from "../../contexts/LanguageContext";
import CardItem from "./CardItem";
import languageData from "./../../assets/languageData";

const CardGroup = () => {
  const history = useHistory();
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
      cardImg: "ri:coupon-2-line",
      color: "#0071FF",
      button: card_1_btn,
      path: "/coupon",
    },
    {
      title: card_2,
      body: card_2_desc,
      cardImg: "el:star-alt",
      color: "#0071FF",
      button: card_2_btn,
      path: "/about",
    },
    {
      title: card_3,
      body: card_3_desc,
      cardImg: "bx:bx-map",
      color: "#0071FF",
      button: card_3_btn,
      path: "/",
    },
  ];

  const handleClick = (path) => {
    if (path !== "/") {
      history.push(path);
    } else {
      window.open("https://goo.gl/maps/oUhxzkZFZpzxpaHN9");
    }
  };

  return (
    <Container
      maxWidth="lg"
      component="section"
      style={{ paddingTop: "5em", paddingBottom: "4em" }}
    >
      <Grid container>
        {cardData.map(({ title, body, cardImg, color, button, path }) => (
          <React.Fragment key={title}>
            <Grid
              item
              xs={12}
              md={4}
              align="center"
              style={{ marginBottom: "4rem" }}
            >
              <CardItem
                title={title}
                body={body}
                cardImg={cardImg}
                color={color}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => handleClick(path)}
                >
                  {button}
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
