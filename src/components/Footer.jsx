import React from "react";
import { Container } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  space_small: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  textField: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

function Footer({ classes }) {
  return (
    <Container
      maxWidth="false"
      style={{
        color: "#FFFFFE",
        height: 35,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: 35,
          fontFamily: "Source Sans Pro, sans-serif",
          fontSize: 20,
        }}
      >
        <h6 className={classes.textField}>All right reserved</h6>
        <h6 className={classes.textField}>
          &copy; Filip Cichowski &#38; Janek Naklicki 2021
        </h6>
        <div>
          <FacebookIcon className={classes.space_small}></FacebookIcon>
          <InstagramIcon className={classes.space_small}></InstagramIcon>
          <GitHubIcon className={classes.space_small}></GitHubIcon>
        </div>
      </Box>
    </Container>
  );
}

export default withStyles(styles)(Footer);
