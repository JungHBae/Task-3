import React, { useRef, useState } from "react";
import { StyledInput, SmallButton } from "../GlobalStyles";

export const Input = () => {
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
    if (name.current.value.length === 0) {
      alert("이름과 가격 모두 입력해주세요!");
      return;
    }
    alert(`이름: ${name.current.value} 가격: ${value ? value.replace(/,/g, "") : 0}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름: &nbsp;</label>
        <StyledInput type="text" placeholder="이름" ref={name} />

        <label>가격: &nbsp;</label>
        <StyledInput type="text" value={value} onChange={handleChange} placeholder="가격" />
        <SmallButton addColor="green" type="submit">
          저장
        </SmallButton>
      </div>
    </form>
  );
};
