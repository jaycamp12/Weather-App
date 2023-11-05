import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
        <hr></hr>
  
        <a1>Full Stack Case Study</a1><br></br>
        <a2>Jay Chopadekar : 414</a2><br></br>
        <a2>Tejas Luste : 417</a2>
      </div>
    </React.Fragment>
  );
}

export default App;
