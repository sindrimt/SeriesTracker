import React from "react";
import { ButtonOuter } from "./AddSerieButtonStyles";

const AddSerieButton = ({ action }) => {
  return <ButtonOuter onClick={action} />;
};

export default AddSerieButton;
