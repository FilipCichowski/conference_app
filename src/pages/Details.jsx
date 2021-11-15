import React from "react";
import axios from "axios";
import PhotoSection from "../components/UI/PhotoSection";
import HeroUI from "../components/HeroUI";
import { Container } from "@material-ui/core";

class Details extends React.Component {
  state = {
    details: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://janek-filip-conference-app.herokuapp.com/details"
      );
      this.setState({ details: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, details } = this.state;
    if (error) {
      return <div>Something went wrong :( {error.message}</div>;
    }
    return (
      <>
        <HeroUI
          url={
            "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1565&q=80"
          }
          header={"Want to know more about our event?"}
          suheader={
            "We collected most important informations in one place for you"
          }
          buttonText={"Read more"}
          showButton={true}
        ></HeroUI>

        <Container p={5}>
          {this.state.details.map((detail, index) => {
            let alternatingSide = true;
            if (index % 2 === 0) {
              alternatingSide = true;
            } else {
              alternatingSide = false;
            }
            return (
              <PhotoSection
                key={detail.id}
                header={detail.Name}
                content={detail.Description}
                image={
                  "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1565&q=80"
                }
                side={alternatingSide}
              />
            );
          })}
        </Container>
      </>
    );
  }
}

export default Details;
