import React from "react";
import { Component } from "react";
import Statistics from "../statistics/Statistics";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Section from "../section/SectionTitle";

import { Container } from "../App/App.styled";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
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
      <Container>
        <Section title=" Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
            options={this.state}
          />

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
