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
      .get(`/api/employees/${id}`, {
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
        <h2>{this.state.employee.name}</h2>
        <p>
          {this.state.employee._id} - {this.state.employee.email} -
          {this.state.employee.mobile}
        </p>

        <h5>
          <Link to={`/employees/edit/${this.state.employee._id}`}>edit</Link>
        </h5>
      </div>
    );
  }
}
