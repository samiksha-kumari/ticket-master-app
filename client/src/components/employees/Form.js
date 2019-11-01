import React from "react";
import axios from "../../config/axios";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.employee ? props.employee.name : "",
      email: props.employee ? props.employee.email : "",
      mobile: props.employee ? props.employee.mobile : "",
      department: props.employee ? this.props.employee.department : "",
      departments: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/departments", {
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      departmentId: this.state.department
    };

    this.props.employee && (formData.id = this.props.employee._id);
    if (this.props.employee) {
      this.props.handleEmployeeSubmit(formData);
    } else {
      this.props.handleAddEmployee(formData);
    }
  };

  render() {
    console.log("state ", this.state);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>
              Name
              <Input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
            </Label>
            <br />
            <Label>
              Email
              <Input
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
            </Label>
            <br />
            <Label>
              Mobile
              <Input
                type="text"
                value={this.state.mobile}
                onChange={this.handleChange}
                name="mobile"
              />
            </Label>
            <br />
            <Label>
              Department
              <select
                id="inputState"
                className="form-control"
                value={this.state.department}
                onChange={this.handleChange}
                name="department"
              >
                <option selected>select</option>
                {this.state.departments.map(department => {
                  return (
                    <option key={department._id} value={department._id}>
                      {department.name}
                    </option>
                  );
                })}
              </select>
            </Label>

            <br />
            <Button color="primary" type="submit">
              Add
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default EmployeeForm;
