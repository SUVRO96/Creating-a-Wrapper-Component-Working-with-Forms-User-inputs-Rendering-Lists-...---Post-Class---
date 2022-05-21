import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.relatives = [
      { name: "Arijit Nath", relation: "father" },
      { name: "Ananya Nath", relation: "sister" },
      { name: "sadhana Nath", relation: "mother" },
      { name: "Shanti Nath", relation: "grand mother" },
      { name: "Debrani Mukherjee", relation: "father" }
    ];
  }
  render() {
    return (
      <div id="main">
        <ol key={"relativeList"}>
          {this.relatives &&
            this.relatives.map((item, index) => (
              <li key={`relativeListItem${index + 1}`}>{item.name}</li>
            ))}
        </ol>
      </div>
    );
  }
}

export default App;
