import React from "react";
import image from "../images/advertising.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={image} alt="Smiley face" height="700vh" width="700vh" />
      </div>
    );
  }
}

export default Home;
