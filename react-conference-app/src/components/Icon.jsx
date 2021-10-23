import React from "react";

class Icon extends React.Component {
  render() {
    return (
      <a href={this.props.link}>
        <div>
          <img src={this.props.icon}></img>
        </div>
      </a>
    );
  }
}

export default Icon;
