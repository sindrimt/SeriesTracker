import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { CreatePostOuter, Gridcontainer, SearchOuter } from "./CreatePostStyles";

import Loading from "../../Pages/LoadingPage/Loading";

import AnimeCard from "../Cards/AnimeCard/AnimeCard";

import Overlay from "../Overlay/Overlay";

import { motion, AnimateSharedLayout } from "framer-motion";

const CreatePost = () => {
  const [topAnime, setTopAnime] = useState([]);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState(false);

  const [show, setShow] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [filtered, setFiltered] = useState([]);

  const GetTopAnime = () => {
    setLoading(true);
    axios
      .get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      //https://api.jikan.moe/v3/top/type/page/subtype
      .then(({ data }) => {
        setTopAnime(data.top.slice(0, 50));
        setFiltered(data.top.slice(0, 50));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("Fetched anime");
    GetTopAnime();
  }, []);

  // const fileOnChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

  // const sendImage = (e) => {
  //   let formdata = new FormData();

  //   formdata.append("image", image);
  //   formdata.append("_id", "asdaas76345345");

  //   fetch("api/users", {
  //     method: "POST",
  //     body: formdata,
  //   })
  //     .then((res) => res.text())
  //     .then((resBody) => {
  //       console.log(resBody);
  //     });
  // };

  useEffect(() => {
    let animeFilter = topAnime.filter((anime) => {
      return anime?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFiltered(animeFilter);
  }, [searchTerm]);

  if (loading) {
    return <Loading />;
  }

  console.log(show);
  return (
    <>
      <CreatePostOuter>
        <SearchOuter>
          <input type="text" placeholder="serach" onChange={(e) => setSearchTerm(e.target.value)} />
        </SearchOuter>
        {/* <motion.div Layout style={{ width: "100%" }}> */}
        <Gridcontainer>
          {filtered?.map((anime, index) => {
            return (
              <>
                <AnimeCard title={anime.title} episodes={anime.episodes} image={anime.image_url} />
              </>
            );
          })}
        </Gridcontainer>
        {/*  </motion.div> */}
      </CreatePostOuter>
    </>
  );
};

export default CreatePost;
