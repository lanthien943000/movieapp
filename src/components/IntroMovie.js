import React from "react";
import ReactPlayer from "react-player";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useState } from "react";

function IntroMovie() {
  const [isMuted, setIsMuted] = useState(true);
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
        muted={isMuted}
      />
      <div onClick={() => setIsMuted((e) => !e)} className="vollume">
        {isMuted ? (
          <VolumeOffIcon id="btnVolume" sx={{ fontSize: "40px" }} />
        ) : (
          <VolumeUpIcon id="btnVolume" sx={{ fontSize: "40px" }} />
        )}
      </div>
      <div className="fadebottom"></div>
    </div>
  );
}

export default IntroMovie;
