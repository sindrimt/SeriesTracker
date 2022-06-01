import axios from "axios";

const apiUrl = "/api/users";

export const getUser = () => axios.get(apiUrl).then((res) => console.log(res));

export const postUser = (postUser) =>
  axios
    .post(apiUrl, postUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
