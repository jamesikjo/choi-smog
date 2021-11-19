import React, { useContext } from "react";
import { Container, Typography } from "@material-ui/core";
import { LanguageContext } from "./../contexts/LanguageContext";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import choiSmog from ".././assets/images/choi-smog.jpg";
import LogoDivider from "../components/LogoDivider";
import languageData from "./../assets/languageData";
import Layout from "../components/Layout";

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
        <Typography variant="h4" color="primary" gutterBottom>
          <b>{aboutUs}</b>
        </Typography>

        <Typography variant="subtitle1" color="primary" align="center">
          {aboutUsDesc}
        </Typography>

        <LogoDivider padding="1em 0em" />

        <AwesomeSlider style={{ maxWidth: 650 }}>
          <div data-src="https://s3-media0.fl.yelpcdn.com/bphoto/k2_SCHUty5nVGVytFvlmVg/o.jpg" />
          <div data-src="https://s3-media0.fl.yelpcdn.com/bphoto/0yODHl0f_-AgJ3iFi2HQcA/o.jpg" />
          <div data-src="https://s3-media0.fl.yelpcdn.com/bphoto/5Fd45_OizXQsqw14obkslg/o.jpg" />
          <div data-src={choiSmog} />
        </AwesomeSlider>
      </Container>
    </Layout>
  );
};

export default AboutUs;
