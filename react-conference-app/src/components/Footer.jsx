import React from "react";
import Icon from "./Icon";
import facebookLogo from "../images/icon.png"
import instagramLogo from "../images/icon.png"
import githubLogo from "../images/icon.png"

class Footer extends React.Component {
    
  render() {
    let profiles =['https://facebook.com/me','https://www.youtube.com/watch?v=dQw4w9WgXcQ','https://instagram.com']
    return (
      <footer>
        <div>All rights reserved</div>
        <div>© Filip Cichowski & Janek Naklicki </div>
        <div>
            <Icon icon={githubLogo} link={profiles[0]}/>
            <Icon icon={instagramLogo} link={profiles[1]}/>
            <Icon icon={facebookLogo} link={profiles[2]}/>
        </div>
      </footer>
    );
  }
}

export default Footer;
