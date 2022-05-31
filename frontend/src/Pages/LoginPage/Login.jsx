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
  RegisterText,
} from "./LoginStyles";

import "./login.css";

import previewImg from "../../Assets/Login/homescreen.png";
import Footer from "../../Components/Footer/Footer";

import {
  signup,
  useAuth,
  logOut,
  logIn,
  userProfileUpdate,
  signInWithGoogle,
  saveData,
  getGoogleRedirectResults,
} from "../../firebase.js";
import GoogleLoginButton from "../../Components/Buttons/GoogleButton/GoogleLoginButton";
import SeriesTrackerLogo from "../../Assets/Images/logo.png";

import FButton from "../../Components/Buttons/FormButton/FormButton";
import InputField from "../../Components/FormField/FormField";
import Loading from "../LoadingPage/Loading";
import { useNavigate } from "react-router-dom";
import FormField from "../../Components/FormField/FormField";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const testRef = useRef();

  let navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  const currentUser = useAuth();

  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState(false);

  const onImageChange = (e) => {
    // Takes image input from user
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setUrl(reader.result);
    });

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSignup = async () => {
    userProfileUpdate(url);
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value).then((cred) => {
        console.log(cred.user);
        return saveData(cred.user.uid, {
          photoURL: url,
        });
      });
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

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signInWithGoogle().then(() => {
      setLoading(false);
    });
  };

  // Gets the data from the google log in
  useEffect(() => {
    getGoogleRedirectResults().then((res) => {
      return saveData(res?.user?.uid, {
        photoURL: res?.user?.photoURL,
      });
    });
  }, []);

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
              <FormField ref={emailRef} type="text" placeholder="email" />
              <FormField ref={passwordRef} type="password" placeholder="password" />
              {register ? (
                <FButton buttonText="Sign Up" action={handleSignup} />
              ) : (
                <FButton buttonText="Log In" action={handleLogin} />
              )}
              <input type="file" multiple accept="image/*" onChange={onImageChange} />
            </LoginFields>
            <GoogleLoginButton action={handleGoogleSignIn} />
          </LoginBoxMain>
          <LoginBoxSecondary>
            {register ? "Already have an account?" : "Don't have an account?"}
            <RegisterText onClick={() => setRegister(!register)}>{register ? "Log In" : "Register Here"}</RegisterText>
          </LoginBoxSecondary>
        </LoginBoxOuter>
      </LoginOuterContainer>
      <Footer />
    </>
  );
};

export default Login;
