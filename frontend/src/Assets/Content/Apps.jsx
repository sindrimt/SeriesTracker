import React from "react";

const Apps = ({ color }) => {
    return (
        <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" fill="transparent" />
            <path
                d="M9 6C7.34315 6 6 7.34315 6 9V13.5C6 15.1569 7.34315 16.5 9 16.5H13.5C15.1569 16.5 16.5 15.1569 16.5 13.5V9C16.5 7.34315 15.1569 6 13.5 6H9Z"
                fill={color}
                fill-opacity="0.7"
            />
            <path
                d="M9 19.5C7.34315 19.5 6 20.8431 6 22.5V27C6 28.6569 7.34315 30 9 30H13.5C15.1569 30 16.5 28.6569 16.5 27V22.5C16.5 20.8431 15.1569 19.5 13.5 19.5H9Z"
                fill={color}
                fill-opacity="0.7"
            />
            <path
                d="M19.5 9C19.5 7.34315 20.8431 6 22.5 6H27C28.6569 6 30 7.34315 30 9V13.5C30 15.1569 28.6569 16.5 27 16.5H22.5C20.8431 16.5 19.5 15.1569 19.5 13.5V9Z"
                fill={color}
                fill-opacity="0.7"
            />
            <path
                d="M22.5 19.5C20.8431 19.5 19.5 20.8431 19.5 22.5V27C19.5 28.6569 20.8431 30 22.5 30H27C28.6569 30 30 28.6569 30 27V22.5C30 20.8431 28.6569 19.5 27 19.5H22.5Z"
                fill={color}
                fill-opacity="0.7"
            />
        </svg>
    );
};

export default Apps;
