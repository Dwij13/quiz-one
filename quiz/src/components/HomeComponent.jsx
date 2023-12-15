import React, { Component } from "react";
import "./HomeComponent.css";

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="home-box">
        <h1>Quiz App</h1>
        <button>Play</button>
      </div>
    );
  }
}
