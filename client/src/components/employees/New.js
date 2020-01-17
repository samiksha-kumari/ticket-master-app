import React from "react";
import EmployeeForm from "./Form";
import axios from "../../config/axios";

class EmployeeNew extends React.Component {
  constructor() {
    super();
    this.state = {
      employee: {}
    };
  }

  handleAddEmployee = employee => {
    console.log("got it ", employee);
    axios
      .post("/employees", employee, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log("got it ", response.data);
        if (response.data.errors) {
          console.log("validation errors", response.data.errors);
        } else {
          console.log("success", response.data);
          this.props.history.push("/employees");
        }
      })
      .catch(err => {
        console.log("errrr");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>Add Employee</h2>
        <EmployeeForm handleAddEmployee={this.handleAddEmployee} />
      </div>
    );
  }
}

export default EmployeeNew;
