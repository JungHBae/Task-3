import React, { useRef, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { Selector } from "./components/Selector";
import { Modal } from "./components/Modal";

const StyledSection = styled.section`
  display: flex;
  border: 2px solid black;
  height: 120px;
  width: 500px;
  overflow: hidden;
`;

const StyledInput = styled.input`
  height: 30px;
  border-radius: 7px;
  &:focus {
    outline: none;
  }
`;
const SmallButton = styled.button`
  background-color: ${(props) => props.color};
  padding: 5px 10px;
  font-size: 14px;
  color: ${(props) => (props.color === "#fab1a0" ? "#d63031" : "#000000")};
`;

const MediumButton = styled.button`
  background-color: ${(props) => props.color};
  padding: 10px 20px;
  font-size: 14px;
  color: ${(props) => (props.color === "#fab1a0" ? "#d63031" : "#000000")};
`;
const LargeButton = styled.button`
  border: 4px solid ${(props) => props.color};
  padding: 12px 24px;
  font-weight: bold;
  font-size: 17px;
  color: ${(props) => (props.color === "#fab1a0" ? "#d63031" : "#000000")};
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);
  const name = useRef("");
  const handleChange = (event) => {
    const inputValue = event.target.value;

    // Remove any commas from the input
    const sanitizedValue = inputValue.replace(/,/g, "");

    // Check if the sanitized input value is a number or empty
    if (!isNaN(sanitizedValue) || sanitizedValue === "") {
      // Remove any leading zeros if the input value is not empty
      const trimmedValue = sanitizedValue !== "" ? sanitizedValue.replace(/^0+/, "") : "";

      // Add a comma every three digits
      const formattedValue = trimmedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      // Set the state to '0' if the formatted value is empty
      setValue(formattedValue === "" ? "0" : formattedValue);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`이름: ${name.current.value} 가격: ${value ? value.replace(/,/g, "") : 0}`);
  };

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <GlobalStyle />
      <section>
        <h2>Buttons</h2>
        <div>
          <LargeButton color="#55efc4">Large Primary Button</LargeButton>
          <MediumButton color="#55efc4">Medium</MediumButton>
          <SmallButton color="#55efc4">Small</SmallButton>
        </div>
        <div>
          <LargeButton color="#fab1a0">Large Primary Button</LargeButton>
          <MediumButton color="#fab1a0">Medium</MediumButton>
          <SmallButton color="#fab1a0">Small</SmallButton>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <h2>Input</h2>
        <div>
          <label>이름: &nbsp;</label>
          <StyledInput type="text" placeholder="이름" ref={name} />

          <label>가격: &nbsp;</label>
          <StyledInput type="text" value={value} onChange={handleChange} placeholder="가격" />
          <SmallButton color="#55efc4" type="submit">
            저장
          </SmallButton>
        </div>
      </form>
      <section>
        <h2>Modal</h2>
        <div>
          <SmallButton color="#55efc4" type="submit">
            open modal
          </SmallButton>
          <LargeButton color="#fab1a0" onClick={handleButtonClick}>
            open modal
          </LargeButton>
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <h2>This is my modal</h2>
            <p>Some content goes here</p>
            <button onClick={handleCloseModal}>Close</button>
          </Modal>
        </div>
      </section>
      <h2>Selector</h2>
      <StyledSection>
        <Selector absolute="absolute" />
        <Selector />
      </StyledSection>
    </div>
  );
}

export default App;
