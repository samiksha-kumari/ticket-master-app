import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import "../styles/App.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "./config/axios";
import { setUser } from "./actions/user";
// store creation

const store = configureStore(); // it bascially return an object(Store) .

const ele = (
  <Provider store={store}>
    {/* take property 'store'   created - (store) */}
    <App />{" "}
    {/* wrapping it insdie component, we r redndering the Provider component */}
  </Provider>
);

if (localStorage.getItem("token")) {
  axios
    .get("/users/account", {
      headers: {
        "x-auth": localStorage.getItem("token")
      }
    })
    .then(response => {
      const user = response.data;
      console.log(user);
      store.dispatch(setUser(user));
    });
}

ReactDOM.render(ele, document.getElementById("root")); //method of reactDom - render
