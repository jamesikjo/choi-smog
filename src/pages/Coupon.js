import React from "react";
import { Typography, Box } from "@material-ui/core";
import Layout from "../components/Layout";

const Coupon = () => {
  return (
    <Layout>
      <Box
        component="main"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <Typography variant="h4" align="center">
          Coming Soon!
        </Typography>
      </Box>
    </Layout>
  );
};

export default Coupon;
