import React, { useRef, useState } from "react";

import {
  LoginOuterContainer,
  LoginPreviewOuter,
  LoginPreviewTxt,
  LoginPreviewHeader,
  TxtOuter,
  LoginPreviewImg,
  LoginBoxMain,
} from "./LoginStyles";

import "./login.css";
import previewImg from "../../Assets/Login/homescreen.png";
import Footer from "../../Components/Footer/Footer";

import { signup, useAuth, logOut, logIn, userProfileUpdate, signInWithGoogle } from "../../firebase.js";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const currentUser = useAuth();
  const [image, setImage] = useState();
  const [url, setUrl] = useState();

  const onImageChange = (e) => {
    // Takes image input from user
    //todo not currently working as intended
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setUrl(reader.result);
      //localStorage.setItem("profilePic", reader.result);
    });

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSignup = async () => {
    userProfileUpdate(url);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    userProfileUpdate(url);
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => console.log("eyy"));
  };

  /*  const checkUrl = () => {
    console.log(url);
  }; */

  return (
    <>
      <LoginOuterContainer>
        <LoginPreviewOuter>
          <TxtOuter>
            <LoginPreviewHeader>Track your series</LoginPreviewHeader>
            <LoginPreviewTxt>
              Save your series' progress, rate them, discover new ones, and connect with friends!
            </LoginPreviewTxt>
          </TxtOuter>
          <LoginPreviewImg src={previewImg} alt="Homescreen preview" />
        </LoginPreviewOuter>
      </LoginOuterContainer>
      <LoginBoxMain>
        <input ref={emailRef} placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
        {/*         <button onClick={checkUrl}>URL</button>
         */}{" "}
        <button onClick={handleSignup}>Sign Up</button>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      </LoginBoxMain>
      <Footer />
    </>
  );
};

export default Login;
