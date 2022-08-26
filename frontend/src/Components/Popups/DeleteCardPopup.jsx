import React from "react";

import {
  DeletePopupOuter,
  DeletePopupText,
  DeletePopupOptionsContainers,
  DeletePopupYesContainer,
  DeletePopupNoContainer,
  DeleteOptionsText,
} from "./DeleteCardPopupStyles";

const DeleteCardPopup = ({ popupText, optionLeft, optionRight, handleOptionLeft, handleOptionRight }) => {
  return (
    <DeletePopupOuter>
      <DeletePopupText>{popupText}</DeletePopupText>
      <DeletePopupOptionsContainers>
        <DeletePopupYesContainer onClick={handleOptionLeft}>
          <DeleteOptionsText>{optionLeft}</DeleteOptionsText>
        </DeletePopupYesContainer>
        <DeletePopupNoContainer onClick={handleOptionRight}>
          <DeleteOptionsText>{optionRight}</DeleteOptionsText>
        </DeletePopupNoContainer>
      </DeletePopupOptionsContainers>
    </DeletePopupOuter>
  );
};

export default DeleteCardPopup;
