import React from "react";
import axios from "../../config/axios";
import DepartmentForm from "./Form";
import { Link } from "react-router-dom";

import { ListGroup, ListGroupItem, Button, Badge, TabContent, Table } from "reactstrap";

export default class DepartmentList extends React.Component {
  constructor() {
    super();

    this.state = {
      departments: []
    };
  }

  componentDidMount() {
    axios
      .get("/departments", {
        //LocalStoarge of the browser level features, every browser have the LS .
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const departments = response.data;
        this.setState({
          departments
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleFormSubmit = formData => {
    axios
      .post("/departments", formData, {
        // 2nd argument is the 'option' object
        headers: {
          // token will get by the tym of login(in this application) , also generate tym of registering
          //whenever we creating our own request headers, you will mention 'x' before.

          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        window.confirm("successfully added")
        const department = response.data;
        this.setState(prevState => ({
          departments: [...prevState.departments, department]
          //[].concat(prevState.departments, department)
        }));

      })
      .catch(err => {
        console.log(err);
      });
  };

  handleRemove = id => {
    axios
      .delete(`/departments/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState(prevState => ({
          departments: prevState.departments.filter(
            department => department._id !== id
          )
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="department">

        <h2>Listing Departments - {this.state.departments.length}</h2><hr />
        <DepartmentForm handleFormSubmit={this.handleFormSubmit} />
        <table className="table">

          <thead>
            <tr>
              <th>Id</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.departments.map((department, index) => {
              return (
                <tr key={department._id}>
                  <td>{index + 1}</td>
                  <td>{department.name}</td>
                  <td> <Button
                    color="danger"
                    onClick={() => {
                      const confirm = window.confirm("Are You Sure Want To Remove?");
                      if (confirm) {
                        this.handleRemove(department._id);
                      }
                    }}

                  >
                    remove
                  </Button>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
    );
  }
}
