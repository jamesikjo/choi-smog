import { Divider, useMediaQuery, useTheme, Box } from "@material-ui/core";
import React from "react";
import choiDivider from "../../assets/images/choi-divider.jpg";

const LogoDivider = ({ padding }) => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: padding,
      }}
    >
      <Divider style={{ width: matchSM ? 140 : 200, margin: 0 }} />
      <img src={choiDivider} alt="divider" style={{ height: 50 }} />
      <Divider style={{ width: matchSM ? 140 : 200, margin: 0 }} />
    </Box>
  );
};

export default LogoDivider;
