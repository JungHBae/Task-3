import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SmallButton } from "../GlobalStyles";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.absolute && `position: absolute; left: 21px;`}
`;

export const Selector = ({ absolute }) => {
  //menu open/close check
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Option 1");
  const menuRef = useRef("");

  // use useEffect to handle outside of menu click within the window
  useEffect(() => {
    function handleClickOutside(event) {
      if (!menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);
  // and an outside browser click handle
  useEffect(() => {
    const handleWindowBlur = () => {
      setIsOpen(false);
    };
    window.addEventListener("blur", handleWindowBlur);
    return () => {
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  // update selection and close menu
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <Menu className="select" ref={menuRef}>
      <SmallButton onClick={() => setIsOpen(!isOpen)}>{selectedItem} &#9660;</SmallButton>
      <div>
        {isOpen && (
          <DropdownContent absolute={absolute}>
            <SmallButton onClick={() => handleItemClick("Option 1")}>Option 1</SmallButton>
            <SmallButton onClick={() => handleItemClick("Option 2")}>Option 2</SmallButton>
            <SmallButton onClick={() => handleItemClick("Option 3")}>Option 3</SmallButton>
          </DropdownContent>
        )}
      </div>
    </Menu>
  );
};
