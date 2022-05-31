import React, { forwardRef } from "react";

import { FieldContainer } from "./FormFieldStyles";

import "./FormField.css";

const FormField = forwardRef(({ type, placeholder }, ref) => (
  <FieldContainer>
    <input ref={ref} type={type} placeholder={placeholder} />
  </FieldContainer>
));

export default FormField;
