const initialState = {
  breakLength: 5,
  sessionLength: 25,
  isRunning: false,
  currentTimer: "Session",
  timeLeft: 1500
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_BREAK":
      if (state.breakLength < 60) {
        return { ...state, breakLength: state.breakLength + 1 };
      }
      return state;
    case "DECREMENT_BREAK":
      if (state.breakLength > 1) {
        return { ...state, breakLength: state.breakLength - 1 };
      }
      return state;
    case "INCREMENT_SESSION":
      if (state.sessionLength < 60) {
        if (!state.isRunning && state.currentTimer === "Session") {
          return {
            ...state,
            sessionLength: state.sessionLength + 1,
            timeLeft: (state.sessionLength + 1) * 60
          };
        }
        return { ...state, sessionLength: state.sessionLength + 1 };
      }
      return state;
    case "DECREMENT_SESSION":
      if (state.sessionLength > 1) {
        if (!state.isRunning && state.currentTimer === "Session") {
          return {
            ...state,
            sessionLength: state.sessionLength - 1,
            timeLeft: (state.sessionLength - 1) * 60
          };
        }
        return { ...state, sessionLength: state.sessionLength - 1 };
      }
      return state;
    case "RESET":
      return initialState;
    case "START_STOP":
      return { ...state, isRunning: !state.isRunning };
    case "DECREMENT_TIME_LEFT":
      if (state.timeLeft > 0) {
        return { ...state, timeLeft: state.timeLeft - 1 };
      } else {
        if (state.currentTimer === "Session") {
          return {
            ...state,
            currentTimer: "Break",
            timeLeft: state.breakLength * 60
          };
        } else {
          return {
            ...state,
            currentTimer: "Session",
            timeLeft: state.sessionLength * 60
          };
        }
      }

    default:
      return state;
  }
};

export default reducer;
