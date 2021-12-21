import React from "react";
import { Component } from "react";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodFeedback = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutralFeedback = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBadFeedback = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 && Math.round((this.state.good / total) * 100);
  };
  render() {
    return (
      <section>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleGoodFeedback}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutralFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBadFeedback}>
          Bad
        </button>
        <h3>Statistics</h3>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.countTotalFeedback()}</p>
        <p>Positive feedback:{this.countPositiveFeedbackPercentage()}%</p>
      </section>
    );
  }
}
export default Statistics;
