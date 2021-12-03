import React, { useContext } from "react";
import { Typography, Box } from "@material-ui/core";
import Layout from "../components/Layout";
import { LanguageContext } from "./../contexts/LanguageContext";
import languageData from "./../assets/languageData";

const Coupon = () => {
  const { language } = useContext(LanguageContext);
  const { couponDesc } = languageData[language];
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
          {couponDesc}
        </Typography>
      </Box>
    </Layout>
  );
};

export default Coupon;
