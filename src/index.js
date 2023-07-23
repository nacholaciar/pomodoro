import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
