import React from "react";
import ReactPlayer from "react-player";

function IntroMovie() {
  return (
    <div className="introl_container">
      <ReactPlayer
        url="https://vimeo.com/246725365"
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={0.3}
        className="videoItrol"
      />
      <div className="fadebottom"></div>
    </div>
  );
}

export default IntroMovie;
