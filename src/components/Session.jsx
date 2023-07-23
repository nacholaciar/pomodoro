import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementSession, incrementSession } from "../redux/actions";

export default function Session() {
  const dispatch = useDispatch();
  const sessionLength = useSelector((state) => state.sessionLength);

  return (
    <div id="session-label">
      Session Length
      <button
        id="session-decrement"
        onClick={() => dispatch(decrementSession())}
      >
        -
      </button>
      <span id="session-length">{sessionLength}</span>
      <button
        id="session-increment"
        onClick={() => dispatch(incrementSession())}
      >
        +
      </button>
    </div>
  );
}
