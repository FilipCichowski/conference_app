import React from "react";
import Button from "./Button";

class Cover extends React.Component {
  // Props - title, description, display-bool, buttonText
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
        {this.props.display && <Button text={this.props.buttonText}></Button>}
      </div>
    );
  }
}

export default Cover;
