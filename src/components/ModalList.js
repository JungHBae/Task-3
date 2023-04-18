import { Modal } from "./Modal";
import { LargeButton, SmallButton } from "../GlobalStyles";
import React, { useState } from "react";

export const ModalList = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleButtonClick = (setFunc) => {
    setFunc(true);
  };

  const handleCloseModal = (setFunc) => {
    setFunc(false);
  };
  return (
    <div>
      {" "}
      <div>
        {/* modal 1 */}
        {/*because onclose is not passed, clickick outside of modal wont close it.*/}
        <Modal isOpen={isOpen1}>
          <h2>Modal 1</h2>
          <p>Some content 1</p>
          <SmallButton addColor="red" onClick={() => handleCloseModal(setIsOpen1)}>
            취소
          </SmallButton>
          <SmallButton addColor="green" type="submit">
            확인
          </SmallButton>
        </Modal>
        {/* Modal 1 button */}
        <SmallButton addColor="green" type="submit" onClick={() => handleButtonClick(setIsOpen1)}>
          open modal
        </SmallButton>

        {/* modal 2 */}
        <Modal isOpen={isOpen2} handleCloseModal={() => handleCloseModal(setIsOpen2)}>
          <h2>Modal 2</h2>
          <p>Some content 2</p>
          <SmallButton addColor="red" onClick={() => handleCloseModal(setIsOpen2)}>
            닫기
          </SmallButton>
        </Modal>
        {/* Modal 2 button */}
        <LargeButton addColor="red" onClick={() => handleButtonClick(setIsOpen2)}>
          open modal
        </LargeButton>
      </div>
    </div>
  );
};
