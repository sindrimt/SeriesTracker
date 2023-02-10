import React, { forwardRef } from "react";

import { FieldContainer } from "./FormFieldStyles";
import { HiOutlineUser, HiOutlineKey } from "react-icons/hi";

import "./FormField.css";

const FormField = forwardRef(({ type, placeholder, change }, ref, name) => (
    <div className="field_outer_container">
        {placeholder === "email" ? <HiOutlineUser size={20} color={"rgb(100, 100, 100)"} /> : <HiOutlineKey size={20} color={"rgb(100, 100, 100)"} />}
        <input className="input_field" ref={ref} type={type} placeholder={placeholder} onChange={change} />
    </div>
));

export default FormField;
