import React, { useState, useEffect } from "react";

import {
  AnimeCardOuter,
  CounterButton,
  EpisodeCount,
  LeftOuter,
  MiddleOuter,
  RightOuter,
  Title,
  AnimeImage,
  DialogOuter,
  FormFieldOuter,
} from "./AnimeCardStyles";

import plus from "../../../Assets/Cards/AnimeCard/plus.svg";

import Dialog from "@mui/material/Dialog";
import Slider from "@mui/material/Slider";

import FormField from "../../FormField/FormField";

import { useAuth } from "../../../firebase";

const AnimeCard = ({ title, episodes, image }) => {
  const [open, setOpen] = useState(false);
  const [animeTitle, setAnimeTitle] = useState(title);
  const [episodesWatched, setEpisodesWatched] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [formImage, setFormImage] = useState({});
  const [rating, setRating] = useState(1);

  //TODO Add episodeCount to useState så bruker kan bestemme hvor mange episode det er i serien.

  const currentUser = useAuth();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleSliderChange = (name) => (e, value) => {
    setRating(parseInt(value));
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);

    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();

    //formdata.append("image", image);
    formdata.append("userId", currentUser?.uid);
    formdata.append("title", animeTitle);
    formdata.append("username", currentUser?.email.split("@")[0]);
    formdata.append("episodesWatched", episodesWatched);
    formdata.append("episodeCount", episodes);
    formdata.append("rating", rating);
    formdata.append("image", selectedFile ? selectedFile : image);

    // The reason why this ancient technology is used is because multer (image upload)
    //requires form data format or something cringe
    fetch("api/series", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((resBody) => {
        setOpen(false);
        console.log(resBody);
      });
  };

  const handleRemoveImage = () => {
    setPreview();
    setFormImage("");
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogOuter>
          <AnimeCardOuter hover={false}>
            <LeftOuter>
              <AnimeImage src={preview ? preview : image} alt="Image" />
              <Title>{animeTitle === "" ? title : animeTitle}</Title>
            </LeftOuter>
            <MiddleOuter></MiddleOuter>
            <RightOuter>
              <EpisodeCount style={{ color: episodesWatched > episodes ? "red" : "" }}>
                {episodesWatched === "" ? episodes : episodesWatched + " / " + episodes}
              </EpisodeCount>
              <CounterButton src={plus} alt="Plus" />
            </RightOuter>
          </AnimeCardOuter>
          <FormFieldOuter>
            <form onSubmit={handleSubmit}>
              <FormField type="text" placeholder="Anime Title" change={(e) => setAnimeTitle(e.target.value)} />
              <FormField
                type="number"
                placeholder="episodes watched"
                change={(e) => setEpisodesWatched(e.target.value)}
              />
              <input type="file" onChange={onSelectFile} />
              {preview && (
                <span
                  onClick={handleRemoveImage}
                  style={{ backgroundColor: "papayawhip", color: "red", padding: "2px" }}
                >
                  Remove image
                </span>
              )}
              <button type="submit">Submit</button>
            </form>
          </FormFieldOuter>
          <Slider
            onChange={handleSliderChange("favoriteNumber")}
            defaultValue={1}
            step={1}
            min={1}
            max={10}
            marks={[
              {
                value: 1,
                label: "1",
              },
              {
                value: 2,
                label: "2",
              },
              {
                value: 3,
                label: "3",
              },
              {
                value: 4,
                label: "4",
              },
              {
                value: 5,
                label: "5",
              },
              {
                value: 6,
                label: "6",
              },
              {
                value: 7,
                label: "7",
              },
              {
                value: 8,
                label: "8",
              },
              {
                value: 9,
                label: "9",
              },
              {
                value: 10,
                label: "10",
              },
            ]}
            valueLabelDisplay="off"
          />
        </DialogOuter>
      </Dialog>
      <AnimeCardOuter onClick={handleClick}>
        <LeftOuter>
          <AnimeImage src={image} alt="Image" />
          <Title>{title.slice(0, 20)}</Title>
        </LeftOuter>
        <MiddleOuter></MiddleOuter>
        <RightOuter>
          <EpisodeCount>{episodes}</EpisodeCount>
          <CounterButton src={plus} alt="Plus" />
        </RightOuter>
      </AnimeCardOuter>
    </>
  );
};

export default AnimeCard;
