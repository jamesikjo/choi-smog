import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles, Container, Button } from "@material-ui/core";
import { LanguageContext } from "../../contexts/LanguageContext";
import languageData from "./../../assets/languageData";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e7e7e7",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  const { home, aboutUs, coupon, contact } = languageData[language];

  const navLinks = [
    { title: home, path: "/" },
    { title: aboutUs, path: "/about" },
    { title: coupon, path: "/coupon" },
    { title: contact, path: "/contact" },
  ];

  return (
    <nav className={classes.root}>
      <Container maxWidth="md" className={classes.navContainer}>
        {navLinks.map(({ title, path }) => (
          <Button
            key={title}
            component={NavLink}
            exact
            to={path}
            size="large"
            variant="text"
            color="primary"
            style={{ padding: "12px 8px", fontWeight: "bold" }}
            activeStyle={{
              color: "#0071ff",
            }}
          >
            {title}
          </Button>
        ))}
      </Container>
    </nav>
  );
};

export default NavBar;
