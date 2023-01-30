import React from "react";

import { FButton } from "./FormButtonStyles";

const FormButton = ({ buttonText, action }) => {
    return <FButton onClick={action}>{buttonText}</FButton>;
};

export default FormButton;
