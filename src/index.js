import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import EventProvider from "./contexts/EventProvider";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <EventProvider>
        <App />
      </EventProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
