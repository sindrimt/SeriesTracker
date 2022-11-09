import React, { forwardRef } from "react";

import { FieldContainer } from "./FormFieldStyles";

import "./FormField.css";

const FormField = forwardRef(({ type, placeholder, change }, ref) => (
    <input className="input_field" ref={ref} type={type} placeholder={placeholder} onChange={change} />
));

export default FormField;
