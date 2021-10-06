import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 10,
  },

  imageContainer: {
    width: 74,
    height: 74,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0.5em",
  },
}));

const CardItem = ({ children, title, body, cardImg, alt }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={4}>
      <CardContent
        style={{
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <Box className={classes.imageContainer}>
            <img
              src={cardImg}
              alt={alt}
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Typography variant="h6" color="primary">
            <b>{title}</b>
          </Typography>
          <Divider />
          <Typography
            variant="subtitle2"
            color="primary"
            style={{ marginBottom: "1em" }}
          >
            {body}
          </Typography>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardItem;
