import styled from "@emotion/styled";

export const Title = styled.h3`
  font-size: 28px;
  font-weight: 400px;
  text-align: center;
`;
export const StatiscicsList = styled.ul`
  list-style: none;
  font-size: larger;
  margin: 0;
  padding-left: 250px;
`;
export const Item = styled.li`
  width: 360px;
  margin-bottom: 10px;
  font-weight: 700;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: lightgrey;

  &:hover {
    transition: 0.25s;
    transform: scale(1.15);
  }
`;
