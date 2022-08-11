import "./App.css";
import React, { useRef } from "react";
import { SearchPage } from "./Components";

function App() {
  const gifDiv = useRef(null);

  return (
    <div className="App">
      <SearchPage gifDiv={gifDiv} />
      <div id="start-gif" ref={gifDiv}>
        <h1>Welcome to the GitHub Repo-Radar 🛰️</h1>
        <img id="radio-gif" src="radar_principle.gif" alt="radar gif" />
      </div>
    </div>
  );
}

export default App;
