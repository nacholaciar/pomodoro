import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementTimeLeft } from "../redux/actions";

export default function Timer() {
  const dispatch = useDispatch();
  const timeLeft = useSelector((state) => state.timeLeft);
  const currentTimer = useSelector((state) => state.currentTimer);
  const isRunning = useSelector((state) => state.isRunning);
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerIdRef.current = setInterval(() => {
        dispatch(decrementTimeLeft());
      }, 1000);
    } else {
      clearInterval(timerIdRef.current);
    }

    return () => clearInterval(timerIdRef.current);
  }, [isRunning, dispatch]);

  useEffect(() => {
    if (timeLeft === 0) {
      const beepAudio = document.getElementById("beep");
      beepAudio.play();
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div>
      <div id="timer-label">{currentTimer}</div>
      <div id="time-left">{`${formattedMinutes}:${formattedSeconds}`}</div>
    </div>
  );
}
