import React from "react";
import axios from "../../config/axios";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";

export default class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      // state = { name: '' }
      employees: []
    };
  }

  componentDidMount() {
    axios
      .get("/employees", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const employees = response.data;
        this.setState({
          employees
        });
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleRemove = id => {
    if (window.confirm("Are you Sure?")) {
      axios
        .delete(`/employees/${id}`, {
          headers: {
            "x-auth": localStorage.getItem("token")
          }
        })
        .then(response => {
          console.log(response.data);
          if (response.data._id) {
            this.setState(prevState => {
              return {
                employees: prevState.employees.filter(
                  employee => employee._id !== id
                )
              };
            });
          }
        });
    }
  };

  render() {
    return (
      <div>
        <h2>Listing Employees - {this.state.employees.length}</h2>
        <Table striped>
          <thead>
            <tr>
              <th> id </th>
              <th> name </th>
              <th> email </th>
              <th> moblie </th>
              <th> department </th>
              <th> actions </th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/employees/${employee._id}`}>
                      {employee.name}
                    </Link>
                  </td>
                  <td>{employee.email}</td>
                  <td>{employee.mobile}</td>
                  <td>{employee.departmentId.name}</td>
                  <Button
                    color="danger"
                    onClick={() => {
                      const confirm = window.confirm("Are You Sure ?");
                      if (confirm) {
                        this.handleRemove(employee._id);
                      }
                    }}
                  >
                    remove
                  </Button>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Link to="/employees/new">Add Employee</Link>

      </div>
    );
  }
}
