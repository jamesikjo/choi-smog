import React, { useContext } from "react";
import { Container, Typography } from "@material-ui/core";
import { LanguageContext } from "./../contexts/LanguageContext";
import LogoDivider from "../components/LogoDivider";
import languageData from "./../assets/languageData";
import Layout from "../components/Layout";
import "react-awesome-slider/dist/styles.css";

const AboutUs = () => {
  const { language } = useContext(LanguageContext);
  const { aboutUs, aboutUsDesc } = languageData[language];
  return (
    <Layout>
      <Container
        maxWidth="md"
        component="main"
        style={{
          paddingTop: "3em",
          paddingBottom: "3em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          {aboutUs}
        </Typography>

        <Typography variant="subtitle1" color="primary" align="center">
          {aboutUsDesc}
        </Typography>

        <LogoDivider padding="1.5em 0em" />
        <Container maxWidth="sm">
          <img
            src="https://s3-media0.fl.yelpcdn.com/bphoto/k2_SCHUty5nVGVytFvlmVg/o.jpg"
            alt="smog books"
            style={{ width: "100%", borderRadius: 10 }}
          />
        </Container>
      </Container>
    </Layout>
  );
};

export default AboutUs;
