import React, { Component } from "react";
import { Container } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { flexbox } from "@mui/system";
import Box from "@mui/material/Box";
function Footer() {
  return (
    <Container
      maxWidth="false"
      style={{
        color: "#FFFFFE",
        backgroundColor: "#030303",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <h6 style={{ paddingLeft: 20, paddingRight: 20 }}>
          All right reserved
        </h6>
        <h6>&copy; Filip Cichowski &#38; Janek Naklicki 2021</h6>
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
        <GitHubIcon></GitHubIcon>
      </Box>
    </Container>
  );
}

export default Footer;
