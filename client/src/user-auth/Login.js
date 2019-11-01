import React from "react";
import { startSetUser } from "../actions/user";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.dispatch(startSetUser(formData)); //we have to dispatch.    redux-thunk make request to the backend //
    // console.log(formData);
  };

  render() {
    console.log("form render");
    if (this.props.user._id) {
      return <Redirect to="/" />;
    }
    return (
      <div className="form-group-row">
        <form onSubmit={this.handleSubmit}>
          <h1 className="h1 mb-3 font-weight-normal text-center">Login</h1>

          <label htmlFor="email" className="inputEmail4"></label>
          <input
            className="form-control"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="email"
            placeholder="email"
          />
          <br />
          <label className="inputPassword4" htmlFor="password"></label>
          <input
            className="form-control"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            placeholder="password"
          />
          <br />
          <button className="btn btn-lg btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Login);
