import React, { Component } from "react";
import "./QuizComponent.css";
import question from "./../questions/Questions";

export default class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ques: 0,
      number: 1,
    };
  }
  increase = () => {
    if (this.state.ques >= question.length - 1) {
      this.setState({
        ques: 0,
        number: 1,
      });
    } else {
      this.setState({
        ques: this.state.ques + 1,
        number: this.state.number + 1,
      });
    }
  };
  decrease = () => {
    if (this.state.ques < 1) {
      this.setState({
        ques: 0,
        number: 1,
      });
    } else {
      this.setState({
        ques: this.state.ques - 1,
        number: this.state.number - 1,
      });
    }
  };
  alert = () => {
    window.alert("Are you sure you want to quit");
  };

  render() {
    return (
      <div className="quiz-box">
        <div>
          <h2>Questions</h2>
        </div>
        <div className="pages">
          <p>
            <span>{this.state.number}</span>of 15
          </p>
        </div>
        <div>
          <p>{question[this.state.ques].question}</p>
        </div>
        <div className="option-box">
          <div className="option">{question[this.state.ques].optionA}</div>
          <div className="option">{question[this.state.ques].optionB}</div>
        </div>
        <div className="option-box">
          <div className="option">{question[this.state.ques].optionC}</div>
          <div className="option">{question[this.state.ques].optionD}</div>
        </div>
        <div className="button">
          <div className="button-box">
            <button onClick={() => this.decrease()}>Previous</button>
            <button onClick={() => this.increase()}>Next</button>
            <button onClick={() => this.alert()}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
