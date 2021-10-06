import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./pages/AboutUs.js";
import LandingPage from "./pages/LandingPage.js";
import ContactForm from "./pages/ContactForm";
import { LanguageProvider } from "./contexts/LanguageContext.js";
import Coupon from "./pages/Coupon";
import ScrollUpButton from "react-scroll-up-button";
import ScrollToTop from "./ScrollToTop.js";

const App = () => {
  return (
    <>
      <ScrollUpButton ShowAtPosition={50} ToggledStyle={{ opacity: 0.8 }} />
      <ScrollToTop />
      <LanguageProvider>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/coupon">
            <Coupon />
          </Route>
          <Route exact path="/contact">
            <ContactForm />
          </Route>
        </Switch>
      </LanguageProvider>
    </>
  );
};

export default App;
