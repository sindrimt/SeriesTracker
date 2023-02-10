import React from "react";

const Playlist = ({ color }) => {
    return (
        <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 8.5C3 7.94772 3.44772 7.5 4 7.5H32C32.5523 7.5 33 7.94772 33 8.5V9.5C33 10.0523 32.5523 10.5 32 10.5H4C3.44772 10.5 3 10.0523 3 9.5V8.5ZM3 17.5C3 16.9477 3.44772 16.5 4 16.5H32C32.5523 16.5 33 16.9477 33 17.5V18.5C33 19.0523 32.5523 19.5 32 19.5H4C3.44772 19.5 3 19.0523 3 18.5V17.5ZM4 25.5C3.44772 25.5 3 25.9477 3 26.5V27.5C3 28.0523 3.44772 28.5 4 28.5H32C32.5523 28.5 33 28.0523 33 27.5V26.5C33 25.9477 32.5523 25.5 32 25.5H4Z"
                fill={color}
            />
        </svg>
    );
};

export default Playlist;
