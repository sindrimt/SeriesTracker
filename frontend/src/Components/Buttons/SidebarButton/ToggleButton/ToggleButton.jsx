import React, { useState } from "react";
import "./togglebutton.css";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../../redux/features/theme/colorThemeSlice";

const ToggleButton = () => {
    //const colorTheme = useSelector((state) => state.theme.theme);
    const [color, setColor] = useState("dark");

    const dispatch = useDispatch();

    const handleToggleTheme = () => {};

    return (
        <div className="toggle-switch">
            <label>
                <input
                    className="input-checkbox"
                    type="checkbox"
                    onClick={() => {
                        dispatch(toggleTheme(color));
                        setColor(color === "dark" ? "light" : "dark");
                        console.log(color);
                    }}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default ToggleButton;
