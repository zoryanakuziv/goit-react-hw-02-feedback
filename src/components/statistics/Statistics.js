import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h3>Statistics</h3>
      {total > 0 && (
        <div>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <p>Total:{total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      )}
    </>
  );
};

export default Statistics;
