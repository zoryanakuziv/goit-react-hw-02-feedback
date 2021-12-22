import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionArray = Object.keys(options);
  return (
    <>
      {optionArray.map((option, index) => (
        <button
          key={index}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
};
export default FeedbackOptions;
