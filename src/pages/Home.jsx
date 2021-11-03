import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Typography from "@mui/material/Typography";
import LazyHero from "react-lazy-hero";
import HeroUI from "../components/UI/HeroUI";
import "../globalStyles.css";

function Home() {
  return (
    <>
      <Header />
      <HeroUI
        url={
          "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1565&q=80"
        }
        header={"Without them gaming wouldn’t be the same"}
        subheader={
          "Meet legendary developers and play best games on vintage machines"
        }
        buttonText={"More details"}
        showButton={true}></HeroUI>

      <Gallery />
    </>
  );
}
export default Home;
