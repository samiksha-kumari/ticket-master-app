import Axios from "axios";

const axios = Axios.create({
  // Axios - method - is an object
  baseURL: "http://localhost:3010"
  // "/"
});
export default axios;
