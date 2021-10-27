import React from "react";
import axios from "axios";
import Cover from "../components/UI/Cover";
import PhotoSection from "../components/UI/PhotoSection";

let tempText = [
  "Our event takes place at the Gaylord Texan Resort & Convention Center, 1501 Gaylord Trail, Grapevine, TX 76051, United States. At our disposal is the main hall where meetings with programmers will be held, in front of it we have a smaller room where you can play vintage machines.",
  "It is possible to rent rooms in the Gaylord Texan Resort & Convention Center itself, however, we expect the number of guests far exceeding the capacity of the hotel. We can recommend nearby hotels such as Van Til Mobile Park and Embassy Suites by Hilton Dallas DFW Airport North. You can also park your caravan in the area.",
  "There are several restaurants and one café in the Gaylord Texan Resort & Convention Center building. There are also Mexican restaurants in the area, such as Mesa Mexican Cuisine, as well as the delicious grilled chicken by Chicken Express. ",
];

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

    this.state.details.map((detail) => (
      console.log(detail.Name)
    ))

    return (
      <>
        <Cover
          title={"Want to know more about our event?"}
          description={
            "We collected most important informations in one place for you"
          }
          buttonText={"Read more"}
          display={false}
        />
        {this.state.details.map((detail) => (
          <PhotoSection
            key={detail.id}
            header={detail.Name}
            content={detail.Description}
          />
        ))}
      </>
    );
  }
}

export default Details;
