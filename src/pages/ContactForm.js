import React, { useState, useEffect, useContext } from "react";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Container,
  makeStyles,
} from "@material-ui/core";
import Layout from "../components/Layout";
import { LanguageContext } from "./../contexts/LanguageContext";
import languageData from "./../assets/languageData";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexGrow: 1, //take up remaining space between header & footer
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 50,
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
    },
  },
}));

const subjects = ["General Question", "Appointment", "Estimate"];

const ContactForm = () => {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  const { contactUs, contactUsDesc, name, email, subject, message, send } =
    languageData[language];
  const [success, setSuccess] = useState(false);
  const [formSubject, setSubject] = useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  useEffect(() => {
    if (window.location.search.includes("success")) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }, []);

  return (
    <Layout>
      <form
        onSubmit="submit"
        name="contact choismog"
        method="POST"
        data-netfliy="true"
        action="/contact/?success"
        className={classes.form}
      >
        <input type="hidden" name="form-name" value="contact choismog" />
        <Container maxWidth="xs">
          <Grid container direction="column" justifyContent="center">
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12} align="center">
                <Typography
                  color="primary"
                  variant="h4"
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                >
                  {contactUs}
                </Typography>
                <Typography color="primary" variant="body1" justify="center">
                  {contactUsDesc}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id={name}
                  label={name}
                  name="name"
                  type="name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id={email}
                  label={email}
                  name="email"
                  type="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  select
                  variant="outlined"
                  id="Native subject"
                  value={formSubject}
                  label={subject}
                  name="subject"
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {subjects.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  id={message}
                  label={message}
                  name="message"
                  style={{ paddingBottom: "1rem" }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                style={{
                  fontSize: 14,
                }}
              >
                {send}
              </Button>
            </Grid>

            {success && (
              <Grid item xs={12}>
                <Typography color="primary" variant="body1">
                  Thanks for your message!
                </Typography>
              </Grid>
            )}
          </Grid>
        </Container>
      </form>
    </Layout>
  );
};

export default ContactForm;
