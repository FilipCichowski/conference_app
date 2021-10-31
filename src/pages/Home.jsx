import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Typography from "@mui/material/Typography";
import LazyHero from "react-lazy-hero";
import Button from "@mui/material/Button";
import "../globalStyles.css";

function Home() {
  const hero = {
    color: "#F5F5F5",
    fontFamily: "Source Sans Pro",
    width: "55vw",
  };

  const header = {
    fontSize: 80,
  };

  const subheader = {
    fontSize: 36,
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  };

  return (
    <>
      <Header />
      <LazyHero
        imageSrc="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1565&q=80"
        minHeight="100vh"
        color="#020202"
        opacity="0.2"
        parallaxOffset="75"
        style={{ margin: 0, padding: 0 }}
      >
        <div style={hero}>
          <h1 style={header}>Without them gaming wouldn’t be the same</h1>
          <h2 style={subheader}>
            Meet legendary developers and play best games on vintage machines
          </h2>
          <Button
            variant="contained"
            style={{
              borderRadius: 10,
              backgroundColor: "#21b6ae",
              fontSize: "28px",
              fontFamily: "Source Sans Pro",
              marginTop: 100,
              padding: "15px 80px"
            }}
          >More details
          </Button>
        </div>
      </LazyHero>
      <Gallery />
    </>
  );
}
export default Home;
