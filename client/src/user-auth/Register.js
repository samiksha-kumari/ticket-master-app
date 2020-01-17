import React from "react";
import axios from "../config/axios";

class Register extends React.Component {
  constructor() {
    //props
    super();
    this.state = {
      username: "",
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
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    axios.post("/users/register", formData).then(users => {
      this.props.history.push("/users/login");
    });
    console.log(formData);
  };

  render() {
    console.log("form render");
    return (
      <div className="justify-content-md-center">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <label className="sr-only" htmlFor="username">
            username
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={this.state.name}
            onChange={this.handleChange}
            name="username"
            placeholder="username"
          />
          <br />
          <label className="sr-only" htmlFor="email">
            email
          </label>
          <input
            className="form-control mb-3"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="email"
            placeholder="email"
          />
          <br />
          <label className="sr-only" htmlFor="password">
            password
          </label>
          <input
            className="form-control mb-3"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            placeholder="password"
          />
          <br />

          <button className="btn btn-lg btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
