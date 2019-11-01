import React from "react";
import axios from "../../config/axios";
import EmployeeForm from "./Form";

export default class EmployeeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {}
    };
  }
  handleEmployeeSubmit = employee => {
    console.log("edit", employee);
    axios
      .put(`/api/employees/${employee.id}`, employee, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response.data);
        if (response.data.errors) {
          window.alert(response.data.message);
          console.log("validation error", response.data.errors);
        } else {
          console.log("success", response.data);
          this.props.history.push(`/employees/${response.data._id}`);
        }
      });
  };

  componentDidMount() {
    console.log("edit employees component did mount");
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
      });
  }
  render() {
    console.log(this.props);
    if (this.state.employee.name) {
      return (
        <div>
          <h2>Edit Employee</h2>
          <EmployeeForm
            employee={this.state.employee}
            handleEmployeeSubmit={this.handleEmployeeSubmit}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
