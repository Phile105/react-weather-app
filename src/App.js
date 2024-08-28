import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Nkosingiphile Patience Mbhele and is{" "}
          <a
            href="https://github.com/Phile105/react-weather-app"
            target="-blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://reliable-kitten-7fca5f.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
