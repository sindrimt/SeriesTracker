import axios from "axios";

const apiUrlUsers = "/api/users";
const apiUrlUsersId = "/api/users/2342sfs1312321"; //todo ID ONLY FOR TEST

const apiUrlSeries = "/api/series";

export const getUser = () =>
  axios
    .get("/api/users/2342sfs1312321")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

export const postUser = (postUser) =>
  axios
    .post(apiUrlUsers, postUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export const putUser = (data) =>
  axios
    .put(apiUrlUsersId, data)
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
