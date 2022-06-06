import React, { useRef, useState, useEffect } from "react";
import { CreatePostOuter } from "./CreatePostStyles";

const CreatePost = () => {
  const [image, setImage] = useState({});

  const fileOnChange = (e) => {
    setImage(e.target.files[0]);
  };

  const sendImage = (e) => {
    let formdata = new FormData();

    formdata.append("image", image);
    formdata.append("_id", "asdaas76345345");

    fetch("api/users", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((resBody) => {
        console.log(resBody);
      });
  };

  return (
    <CreatePostOuter>
      <input type="file" onChange={fileOnChange} />

      <button onClick={sendImage}>Upload</button>
    </CreatePostOuter>
  );
};

export default CreatePost;
