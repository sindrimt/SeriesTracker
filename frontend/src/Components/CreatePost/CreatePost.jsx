import React, { useRef, useState, useEffect } from "react";
import { CreatePostOuter } from "./CreatePostStyles";

import { logOut, useAuth, getUserData, updateUserData } from "../../firebase.js";

const CreatePost = () => {
  const serieNameRef = useRef();
  const serieDescriptionRef = useRef();
  const serieImageRef = useRef();

  const [user, setUser] = useState({});

  const currentUser = useAuth();

  useEffect(() => {
    checkUser();
  });

  const checkUser = async () => {
    await getUserData(currentUser?.uid).then((res) => {
      setUser(res);
    });
  };

  const handleSubmit = () => {
    updateUserData(
      currentUser?.uid,
      serieNameRef.current.value,
      serieDescriptionRef.current.value,
      serieImageRef.current.value
    );
  };

  return (
    <CreatePostOuter>
      <input ref={serieNameRef} type="text" placeholder="Serie name" />
      <input ref={serieDescriptionRef} type="text" placeholder="Serie description" />
      <input ref={serieImageRef} type="file" multiple accept="image/*" />

      <button onClick={handleSubmit}>Submit</button>
    </CreatePostOuter>
  );
};

export default CreatePost;
