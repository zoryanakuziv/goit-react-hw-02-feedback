import React from "react";
import { ButtonList } from "./FeedbackOptions.styled";
import { Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionArray = Object.keys(options);
  return (
    <ButtonList>
      {optionArray.map((option, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </ButtonList>
  );
};
export default FeedbackOptions;
