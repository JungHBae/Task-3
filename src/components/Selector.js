import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyles";

const BtnMenu = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.absolute && "position: absolute;"}
`;

export const Selector = ({ absolute }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Option 1");
  const menuRef = useRef("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    const handleWindowBlur = () => {
      setIsOpen(false);
    };

    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <div className="select" ref={menuRef}>
      <GlobalStyle />
      <button onClick={() => setIsOpen(!isOpen)}>{selectedItem} &#9660;</button>
      {isOpen && (
        <BtnMenu absolute={absolute}>
          <button onClick={() => handleItemClick("Option 1")}>Option 1</button>
          <button onClick={() => handleItemClick("Option 2")}>Option 2</button>
          <button onClick={() => handleItemClick("Option 3")}>Option 3</button>
        </BtnMenu>
      )}
    </div>
  );
};
