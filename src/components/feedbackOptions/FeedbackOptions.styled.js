import styled from "@emotion/styled";

export const ButtonList = styled.ul`
  text-align: center;
  margin: 0 auto 20px;
`;
export const Button = styled.button`
  padding: 5px 30px;
  margin-right: 20px;
  color: black;
  font-size: larger;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.5), 0px 2px 2px rgba(0, 0, 0, 0.14),
    1px 2px 5px rgba(0, 0, 0, 0.12);
  &:hover {
    transition: 0.25s;
    transform: scale(1.15);
  }
`;
