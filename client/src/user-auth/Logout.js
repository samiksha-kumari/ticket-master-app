import React from "react";
import { connect } from "react-redux";
import axios from "../config/axios";
import { resetUser } from "../actions/user";

class Logout extends React.Component {
  componentDidMount() {
    axios
      .delete("/api/users/logout", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response.data);
        localStorage.clear("token");
        this.props.dispatch(resetUser());
        this.props.history.push("/users/login");
      });
  }
  render() {
    return (
      <div>
        {/* <h2>{this.props.user.name} is logging out ...</h2> */}
        <h2>logging out ...</h2>
      </div>
    );
  }
}

const mapstateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapstateToProps)(Logout);
