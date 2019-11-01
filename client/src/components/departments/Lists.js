import React from "react";
import axios from "../../config/axios";
import DepartmentForm from "./Form";
import { Link } from "react-router-dom";

import { ListGroup, ListGroupItem, Button, Badge } from "reactstrap";

export default class DepartmentList extends React.Component {
  constructor() {
    super();

    this.state = {
      departments: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/departments", {
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
      .post("/api/departments", formData, {
        // 2nd argument is the 'option' object
        headers: {
          // token will get by the tym of login(in this application) , also generate tym of registering
          //whenever we creating our own request headers, you will mention 'x' before.

          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        if (response.data.errors) {
          alert(response.data.message);
        } else {
          const department = response.data;
          this.setState(prevState => ({
            departments: [...prevState.departments, department]
            //[].concat(prevState.departments, department)
          }));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleRemove = id => {
    axios
      .delete(`/api/departments/${id}`, {
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
      <div>
        <ListGroup>
          <h2>Listing Departments - {this.state.departments.length}</h2>
          <ul>
            {this.state.departments.map(department => {
              return (
                <ListGroupItem key={department._id}>
                  {department.name}

                  <Button
                    color="danger"
                    onClick={() => {
                      const confirm = window.confirm("Are You Sure?");
                      if (confirm) {
                        this.handleRemove(department._id);
                      }
                    }}
                    className="float-right"
                  >
                    remove
                  </Button>
                </ListGroupItem>
              );
            })}
          </ul>
        </ListGroup>
        <Link to="/departments/new"></Link>
        <h4>Add Department</h4>
        <DepartmentForm handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
