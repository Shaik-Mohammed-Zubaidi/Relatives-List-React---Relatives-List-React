import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relaives = ["Shaik", "Mohammed", "Zubaidi"];

    return (
      <>
        <ol key="relativeList">
          {relaives.map((relative, index) => (
            <li key={"relativeListItem" + (index + 1)}>{relative}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
