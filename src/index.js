import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import reportWebVitals from './reportWebVitals';
import "../src/App.css"


let HSpace = document.querySelector("#root");
let Connect = ReactDOM.createRoot(HSpace);
Connect.render(<App />);

reportWebVitals();
