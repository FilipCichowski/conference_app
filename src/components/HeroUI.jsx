import React from "react";
import LazyHero from "react-lazy-hero";
import Button from "@mui/material/Button";

class HeroUI extends React.Component {
  // Props - title, description, display-bool, buttonText
  render() {
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
      <LazyHero
        imageSrc={this.props.url}
        minHeight="100vh"
        color="#020202"
        opacity="0.2"
        parallaxOffset="75"
        style={{ margin: 0, padding: 0 }}>
        <div style={hero}>
          <h1 style={header}>{this.props.header}</h1>
          <h2 style={subheader}>{this.props.subheader}</h2>
          {this.props.showButton && (
            <Button
              variant="contained"
              style={{
                borderRadius: 10,
                backgroundColor: "#21b6ae",
                fontSize: "28px",
                fontFamily: "Source Sans Pro",
                marginTop: 100,
                padding: "15px 80px",
              }}>
              {this.props.buttonText}
            </Button>
          )}
        </div>
      </LazyHero>
    );
  }
}

export default HeroUI;
