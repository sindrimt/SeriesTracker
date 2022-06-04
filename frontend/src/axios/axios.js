import axios from "axios";

export const getUser = (url) =>
  axios
    .get(url)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

export const postUser = (url, data) =>
  axios
    .post(url, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export const putUser = (url, data) =>
  axios
    .put(url, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export const postSerie = (url, data) =>
  axios
    .post(url, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export const getSerie = (url) =>
  axios
    .get(url)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
