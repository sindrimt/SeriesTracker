import axios from "axios";

const apiUrlUsers = "/api/users";

const apiUrlSeries = "/api/series";

export const getUser = () =>
  axios
    .get(apiUrlUsers)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

export const postUser = (postUser) =>
  axios
    .post(apiUrlUsers, postUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export const postSerie = (postSerie) =>
  axios
    .post(apiUrlSeries, postSerie)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export const getSerie = () =>
  axios
    .get(apiUrlSeries)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
