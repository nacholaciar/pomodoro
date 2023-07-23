import React from "react";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";
import Controls from "./Controls";
import "bootstrap/dist/css/bootstrap.css";

const Pomodoro = () => (
  <div className="container">
    <audio
      id="beep"
      src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      preload="auto"
    ></audio>
    <div className="row">
      <div className="col">
        <Break />
      </div>
      <div className="col">
        <Session />
      </div>
    </div>
    <Timer />
    <Controls />
  </div>
);

export default Pomodoro;
