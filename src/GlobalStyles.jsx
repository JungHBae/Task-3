import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
button{
  line-height: 1.5;
  background-color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  margin: 10px;
  &:hover {
    filter: brightness(110%);
  }
}
`;

const getButtonColor = (addColor) => {
  switch (addColor) {
    case "red":
      return "#fab1a0";
    case "green":
      return "#55efc4";
    default:
      return "";
  }
};

export const SmallButton = styled.button`
  border: 2px solid ${(props) => (props.addColor ? getButtonColor(props.addColor) : "#a8a8a8")};
  background-color: ${(props) => getButtonColor(props.addColor)};
  margin: 5px;
  padding: 5px 10px;
  font-size: 14px;
  color: ${(props) => (props.addColor === "red" ? "#d63031" : "#000000")};
`;

export const MediumButton = styled.button`
  border: 1px solid ${(props) => getButtonColor(props.addColor)};
  background-color: ${(props) => getButtonColor(props.addColor)};
  padding: 10px 20px;
  font-size: 14px;
  color: ${(props) => (props.addColor === "red" ? "#d63031" : "#000000")};
`;
export const LargeButton = styled.button`
  border: 4px solid ${(props) => getButtonColor(props.addColor)};
  padding: 12px 24px;
  font-weight: bold;
  font-size: 17px;
  color: ${(props) => (props.addColor === "red" ? "#d63031" : "#000000")};
  ${(props) =>
    props.addIcon
      ? `
    &::after {
      content: "\\${props.addIcon}";
      font-family: "Segoe UI Symbol";
      padding-left: 7px;
      color:black;
    }
  `
      : ""}
`;

export const StyledSection = styled.section`
  display: flex;
  border: 2px solid black;
  height: 120px;
  width: 500px;
  margin: 10px;
  overflow: hidden;
`;

export const StyledInput = styled.input`
  height: 30px;
  border-radius: 7px;
  &:focus {
    outline: none;
  }
`;
