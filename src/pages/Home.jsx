import React from "react";
import Gallery from "../components/Gallery";
import HeroUI from "../components/HeroUI";
import Guests from "../components/Guests";
import "../globalStyles.css";

function Home() {
  return (
    <>
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
      ></HeroUI>
      <Guests />
      <Gallery/>
      
    </>
  );
}
export default Home;
