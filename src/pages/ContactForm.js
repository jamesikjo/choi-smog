import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Container,
  makeStyles,
} from "@material-ui/core";
import Layout from "../components/Layout";

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

  const [success, setSuccess] = useState(false);
  const [subject, setSubject] = useState("");

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
              <Grid item xs={12}>
                <Typography
                  color="primary"
                  variant="h4"
                  justify="center"
                  gutterBottom
                >
                  <b>Contact us</b>
                </Typography>
                <Typography color="primary" variant="body1" justify="center">
                  Use the form below to send us a message and we'll response as
                  soon as possible
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="name"
                  label="name"
                  name="name"
                  type="name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="email"
                  label="email"
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
                  value={subject}
                  label="subject"
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
                  id="message"
                  label="message"
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
                Send Message
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
