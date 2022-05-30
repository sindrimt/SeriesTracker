import React, { useRef, useState, useEffect } from "react";

import {
  LoginOuterContainer,
  LoginPreviewOuter,
  LoginPreviewTxt,
  LoginPreviewHeader,
  TxtOuter,
  LoginPreviewImg,
  LoginBoxMain,
  LoginBoxLogo,
  LoginBoxLogoOuter,
  LoginFields,
  LoginBoxSecondary,
  LoginBoxOuter,
} from "./LoginStyles";

import "./login.css";

import previewImg from "../../Assets/Login/homescreen.png";
import Footer from "../../Components/Footer/Footer";

import { signup, useAuth, logOut, logIn, userProfileUpdate, signInWithGoogle } from "../../firebase.js";
import GoogleLoginButton from "../../Components/Buttons/GoogleButton/GoogleLoginButton";
import SeriesTrackerLogo from "../../Assets/Images/logo.png";

import FButton from "../../Components/Buttons/FormButton/FormButton";
import Loading from "../LoadingPage/Loading";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const currentUser = useAuth();
  const [image, setImage] = useState();
  const [url, setUrl] = useState();

  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    userProfileUpdate(url);
    try {
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle().then(() => setLoading(false));
  };

  /*  const checkUrl = () => {
    console.log(url);
  }; */
  useEffect(() => {
    document.body.style.backgroundColor = "#FAFAFA";
  }, []);

  if (loading) {
    return <Loading />;
  }

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
        <LoginBoxOuter>
          <LoginBoxMain>
            <LoginBoxLogoOuter>
              <LoginBoxLogo src={SeriesTrackerLogo} />
            </LoginBoxLogoOuter>

            <LoginFields>
              <input ref={emailRef} placeholder="email" />
              <input ref={passwordRef} type="password" placeholder="password" />
              {/*  <input type="file" multiple accept="image/*" onChange={onImageChange} /> */}
              {/*         <button onClick={checkUrl}>URL</button>
               */}
              <FButton buttonText="Log In" />
            </LoginFields>
            <GoogleLoginButton action={handleGoogleSignIn} />
          </LoginBoxMain>
          <LoginBoxSecondary>
            Don't have an account?
            <span style={{ borderBottom: "1px solid black", marginLeft: "5px" }}>Register here</span>
          </LoginBoxSecondary>
        </LoginBoxOuter>
      </LoginOuterContainer>
      <Footer />
    </>
  );
};

export default Login;
