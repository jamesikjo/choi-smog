import React from "react";
import Services from "../components/Services";
import Hero from "./../components/Hero/index";
import CardGroup from "./../components/Card/index";
import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import Layout from "../components/Layout";

const LandingPage = () => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Layout>
      <Box pt={matchSM ? "2.5em" : "4em"} pb={"6em"}>
        <Hero />
        <Services />
        <CardGroup />
      </Box>
    </Layout>
  );
};

export default LandingPage;
