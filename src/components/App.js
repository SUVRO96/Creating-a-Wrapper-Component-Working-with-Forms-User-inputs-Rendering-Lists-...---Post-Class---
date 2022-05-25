import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.relatives = [
      { name: "Arijit Nath" },
      { name: "Ananya Nath"},
      { name: "sadhana Nath"},
      { name: "Shanti Nath"},
      { name: "Debrani Mukherjee"}
    ];
  }
  render() {
    return (
      <div id="main">
        <ol key={"relativeList"}>
          {this.relatives &&
            this.relatives.map((item, index) => (
              <li>{item.name}</li>
            ))}
        </ol>
      </div>
    );
  }
}

export default App;
