import React from "react";
import { useDispatch } from "react-redux";
import { reset, startStop } from "../redux/actions";

export default function Controls() {
  const dispatch = useDispatch();

  const handleReset = () => {
    const beepAudio = document.getElementById("beep");
    beepAudio.pause();
    beepAudio.currentTime = 0;
    dispatch(reset());
  };

  return (
    <div>
      <button id="start_stop" onClick={() => dispatch(startStop())}>
        Start/Stop
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
