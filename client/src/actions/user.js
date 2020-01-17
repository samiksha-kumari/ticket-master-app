import axios from "../config/axios";

export const setUser = user => {
  //whenever we get a user object from the server that user object send we will it to redux
  return {
    type: "SET_USER",
    payload: user ////synchronous - to set the user
  };
};

export const startSetUser = formData => {
  return dispatch => {
    axios.post("/users/login", formData).then(response => {
      if (response.data.hasOwnProperty("errors")) {
        alert(response.data.errors);
      } else {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        dispatch(setUser(response.data));
        // dispatch(setUser({ id: 1, name: "ani" }));
      }
    });
  };
};

export const resetUser = () => {
  return {
    type: "RESET_USER"
  };
};
//async - to api calls
