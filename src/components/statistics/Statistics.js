import React from "react";
import Notification from "../notification/Notification";
import { Title, StatiscicsList, Item } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Title>Statistics</Title>
      {total > 0 && (
        <StatiscicsList>
          <Item>Good:{good}</Item>
          <Item>Neutral:{neutral}</Item>
          <Item>Bad:{bad}</Item>
          <Item>Total:{total}</Item>
          <Item>Positive feedback: {positivePercentage}%</Item>
        </StatiscicsList>
      )}
      {total === 0 && (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};

export default Statistics;
