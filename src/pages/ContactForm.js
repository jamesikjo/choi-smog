import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Container,
  Divider,
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
        <label>
          <Typography
            color="primary"
            variant="h4"
            align="center"
            justify="center"
          >
            <b>Contact Us</b>
          </Typography>
          <Divider
            style={{
              width: "2.5em",
              marginTop: "0.3em",
            }}
          />
        </label>
        <Container maxWidth="xs">
          <Grid container direction="column" justifyContent="center">
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <Typography color="primary" variant="body2">
                  NAME
                </Typography>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="name"
                  label="name"
                  name="name"
                  type="name"
                  InputLabelProps={{ style: { fontSize: 0 }, shrink: false }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography color="primary" variant="body2">
                  EMAIL ADDRESS
                </Typography>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="email"
                  label="email"
                  name="email"
                  type="email"
                  InputLabelProps={{ style: { fontSize: 0 }, shrink: false }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography color="primary" variant="body2">
                  SUBJECT
                </Typography>
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
                  InputLabelProps={{ style: { fontSize: 0 }, shrink: false }}
                >
                  {subjects.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography color="primary" variant="body2">
                  MESSAGE
                </Typography>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  id="message"
                  label="message"
                  name="message"
                  InputLabelProps={{ style: { fontSize: 0 }, shrink: false }}
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
