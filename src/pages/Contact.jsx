import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HeroUI from "../components/HeroUI";
import { Container, Grid } from "@material-ui/core";

function Contact() {
  return (
    <div>
      <HeroUI
        url={
          "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1565&q=80"
        }
        header={"Without them gaming wouldn’t be the same"}
        subheader={
          "Meet legendary developers and play best games on vintage machines"
        }
        buttonText={"More details"}
        showButton={true}
      />
      <Container
        style={{
          fontFamily: "Source Sans Pro, sans-serif",
          fontSize: 40,
          paddingLeft: 0,
          background: "#fff",
          color: "#000",
          paddingTop: "3vh",
          paddingBottom: "3vh",
        }}>
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField fullWidth id="Name" label="Name" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth id="Surname" label="Surname" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth id="ccn" label="Credit card number" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth id="cvv" label="CVV code" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" id="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Your message"
                  fullWidth
                  multiline
                  rows={9}
                />
              </Grid>
              <Grid item xs={4}><Button
                variant="contained"
                style={{
                  borderRadius: 10,
                  backgroundColor: "#21b6ae",
                  fontSize: "24px",
                  fontFamily: "Source Sans Pro",
                  padding: "5px 50px",
                }}>
                Submit
              </Button></Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} p={4}>
            <Typography variant="body1">
              We would love to hear message from you!
            </Typography>
            <Typography variant="h2" component="h2">
              Contact us!
            </Typography>
            <Typography variant="body1">
              We want the entire event to run smoothly and to keep everyone
              informed. We absolutely do not intend to charge your credit card,
              while providing this information is mandatory, our goal is to
              improve your user experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
