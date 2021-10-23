import React from "react";
import Button from "./Button";

class Cover extends React.Component {
  // Props - header, content, side-bool(disply side of picture), image
  render() {
    return (
      <div>
        {this.props.side && <img src={this.props.image}/>}
        <div>{this.props.header}</div>
        <div>{this.props.content}</div>
        {!this.props.side && <img src={this.props.image}/>}
      </div>
    );
  }
}

export default Cover;
