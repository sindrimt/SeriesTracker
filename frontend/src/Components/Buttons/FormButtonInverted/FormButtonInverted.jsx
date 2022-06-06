import React from "react";

import { FButtonInverted } from "./FormButtonInvertedStyles";

const FormButtonInverted = ({ buttonText, action }) => {
  return <FButtonInverted onClick={action}>{buttonText}</FButtonInverted>;
};

export default FormButtonInverted;
