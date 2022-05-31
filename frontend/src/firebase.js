import React, { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdr-T5BQAP-XykI0aHKOzaScHdUtzKMoM",
  authDomain: "seriestracker-ff79c.firebaseapp.com",
  projectId: "seriestracker-ff79c",
  storageBucket: "seriestracker-ff79c.appspot.com",
  messagingSenderId: "793814184005",
  appId: "1:793814184005:web:8bd8a1d9cf2d122042732c",
  measurementId: "G-H1FMJYY0MT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const db = getFirestore(app);

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logOut = (email, password) => {
  signOut(auth);
};

export const logIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const userProfileUpdate = (photo) => {
  updateProfile(auth.currentUser, {
    photoURL: photo,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  return currentUser;
};

export const saveData = async (userId) => {
  try {
    const docRef = await setDoc(doc(db, "users", userId), {
      hei: "marcus",
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithRedirect(auth, provider);

export const getGoogleRedirectResults = () => getRedirectResult(auth);

const analytics = getAnalytics(app);
