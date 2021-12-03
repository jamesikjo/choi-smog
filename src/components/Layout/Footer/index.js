import React, { useContext } from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import shopLogo from "../../../assets/images/shop-logo.png";
import creditCards from "../../../assets/images/credit-cards.png";
import FooterNavLinks from "./FooterNavLinks";
import languageData from "../../../assets/languageData";
import { LanguageContext } from "../../../contexts/LanguageContext";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#2d3e50",
    width: "100%",
    padding: "1.5rem 0rem",
    marginTop: "auto",
  },

  footerFont: {
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.contrastText,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { language } = useContext(LanguageContext); //pass languageData[language] as prop to <FooterLinks />

  return (
    <footer className={classes.footer}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img src={shopLogo} alt="shop logo" style={{ width: 205 }} />
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.footerFont}>
            3225 W Olympic Blvd Ste 1 Los Angeles, CA 90006
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: "1rem" }}>
          <Typography variant="body2" className={classes.footerFont}>
            (714) 821-1347
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: "1rem" }}>
          <Grid item container>
            <FooterNavLinks
              languageData={languageData[language]}
              footerFont={classes.footerFont}
            />
          </Grid>
        </Grid>

        <Grid item style={{ marginBottom: "0.5rem" }}>
          <img src={creditCards} alt="credit cards" style={{ width: 200 }} />
        </Grid>
        <Grid item align="center">
          <Typography
            variant="body2"
            style={{ fontSize: 8 }}
            className={classes.footerFont}
          >
            © {new Date().getFullYear()} Choi-Smog. All Rights Reserved.
          </Typography>
          <Typography
            variant="body2"
            style={{ fontSize: 8 }}
            className={classes.footerFont}
          >
            Logos created with{" "}
            <a href="https://www.LogoMakr.com" title="Logo Makr">
              LogoMakr.com
            </a>{" "}
            &{" "}
            <a href="https://www.icons8.com" title="Icons8">
              icons8.com
            </a>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
export default Footer;
