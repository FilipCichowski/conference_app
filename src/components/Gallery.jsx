import * as React from "react";
import axios from "axios";

class Details extends React.Component {
  state = {
    details: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://janek-filip-conference-app.herokuapp.com/galleries"
      );
      this.setState({ details: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, details } = this.state;

    console.log(typeof Object.values(details));
    console.log(Object.values(details))

    if (error) {
      return <div>Something went wrong :( {error.message}</div>;
    }

    return <></>;
  }
}

export default Details;
