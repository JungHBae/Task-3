import { createGlobalStyle } from "styled-components";

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
