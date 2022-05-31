import React, { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, increment } from "firebase/firestore";

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

export const saveData = async (userId, data) => {
  try {
    const docRef = await setDoc(doc(db, "users", userId), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getUserData = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data().photoUrl);
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

// Puts in new data into Users

export const updateUserData = async (userId, title, description, image) => {
  const userRef = doc(db, "users", userId);

  setDoc(
    userRef,
    {
      posts: {
        id: increment(1),
        title: title,
        description: description,
        image: image,
      },
    },
    { merge: true }
  );
};

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithRedirect(auth, provider);

export const getGoogleRedirectResults = () => getRedirectResult(auth);

const analytics = getAnalytics(app);
