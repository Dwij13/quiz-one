import React, { Component } from "react";
import "./ResultComponent.css";
export default class ResultComponent extends Component {
  render() {
    return (
      <div className="result-div">
        <h1>Result</h1>
        <div className="result">
          <div>
            <p className="message1">You need more practice!</p>
          </div>
          <div>
            <h1 className="score">Your score is 20%</h1>
          </div>
          <div className="number-div">
            <p className="para">
              Total number of Questions <span className="number">15</span>{" "}
            </p>
            <p className="para">
              Number of attempted questions <span className="number">9</span>{" "}
            </p>
            <p className="para">
              Number of correct answers <span className="number">3</span>
            </p>
            <p className="para">
              Number of wrong answers <span className="number">6</span>{" "}
            </p>
          </div>
        </div>
        <div>
          <button>Play Again</button>
          <button>Back to home</button>
        </div>
      </div>
    );
  }
}
