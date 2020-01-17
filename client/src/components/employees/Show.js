import React from "react";
import { Link } from "react-router-dom";
import axios from "../../config/axios";

export default class EmployeeShow extends React.Component {
  constructor() {
    super();
    this.state = {
      employee: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`/employees/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const employee = response.data;
        this.setState({ employee });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>show employee</h2><hr />
        <h3>{this.state.employee.name}</h3>
        <h4>id:-{this.state.employee._id}</h4>
        <h4>email:-{this.state.employee.email}</h4>
        <h4>mobile:-{this.state.employee.mobile}</h4>
        <Link to={`/employees/edit/${this.state.employee._id}`}>Edit Employee</Link>
      </div>
    );
  }
}
