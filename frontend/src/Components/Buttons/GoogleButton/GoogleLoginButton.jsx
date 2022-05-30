import React from "react";
import { GoogleButtonOuter, GoogleIcon, Text } from "./GoogleLoginButtonStyles";

import googleIcon from "../../../Assets/Buttons/GoogleButton/icons8-google-48.svg";

const GoogleLoginButton = ({ action }) => {
  return (
    <GoogleButtonOuter onClick={action}>
      <GoogleIcon src={googleIcon} />
      <Text>Sign in with Google</Text>
    </GoogleButtonOuter>
  );
};

export default GoogleLoginButton;
