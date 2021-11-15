import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Avatar } from "@material-ui/core";
import { Icon } from "@iconify/react";

const CardItem = ({ children: button, title, body, cardImg, color }) => {
  return (
    <Box style={{ padding: "0rem 1rem" }}>
      <Avatar
        style={{
          width: 54,
          height: 54,
          backgroundColor: "#EBF2FF",
          marginBottom: "0.5rem",
        }}
      >
        <Icon icon={cardImg} width={20} height={20} color={color} />
      </Avatar>
      <Typography
        variant="h6"
        color="primary"
        style={{ marginBottom: "0.5rem" }}
      >
        <b>{title}</b>
      </Typography>
      <Typography
        variant="body1"
        color="primary"
        style={{ marginBottom: "1em" }}
      >
        {body}
      </Typography>
      {button}
    </Box>
  );
};

export default CardItem;
