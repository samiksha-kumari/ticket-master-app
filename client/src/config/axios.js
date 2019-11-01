import Axios from "axios";

const axios = Axios.create({
  // Axios - method - is an object
  baseURL: "/"
});
export default axios;
