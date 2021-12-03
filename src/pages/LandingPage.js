import React from "react";
import Services from "../components/Services";
import Hero from "./../components/Hero/index";
import CardGroup from "./../components/Card/index";
import { Box } from "@material-ui/core";
import Layout from "../components/Layout";

const LandingPage = () => {
  return (
    <Layout>
      <Box>
        <Hero />
        <Services />
        <CardGroup />
      </Box>
    </Layout>
  );
};

export default LandingPage;
