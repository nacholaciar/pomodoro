import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementBreak, incrementBreak } from "../redux/actions";

export default function Break() {
  const dispatch = useDispatch();
  const breakLength = useSelector((state) => state.breakLength);

  return (
    <div id="break-label">
      Break Length
      <button id="break-decrement" onClick={() => dispatch(decrementBreak())}>
        -
      </button>
      <span id="break-length">{breakLength}</span>
      <button id="break-increment" onClick={() => dispatch(incrementBreak())}>
        +
      </button>
    </div>
  );
}
