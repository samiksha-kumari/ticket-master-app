import React from "react";
import Select from "react-select";
import axios from "../config/axios";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default class TicketsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      customer: "",
      departments: [],
      department: "",
      employees: [],
      employee: [],
      message: "",
      priority: "",
      code: "",
      title: "",
      dummy: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/customers", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const customers = response.data;
        const arr = [];
        response.data.forEach(data => {
          arr.push({ value: data._id, label: data.name, name: "customers" });
        });

        this.setState({ customers: arr });
        axios
          .get("/api/departments", {
            headers: {
              "x-auth": localStorage.getItem("token")
            }
          })
          .then(response => {
            const departments = response.data;
            const arr = [];
            response.data.forEach(data => {
              arr.push({
                value: data._id,
                label: data.name,
                name: "departments"
              });
            });
            this.setState({ departments: arr });
          });
      });
    axios
      .get("/api/employees", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const employees = response.data;
        console.log(employees);
        this.setState({ employees });
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

  handleSelect = props => {
    if (props.name == "customers") {
      this.setState({ customer: props.value });
    } else if (props.name == "departments") {
      let dummy = [];
      this.state.employees.forEach(data => {
        if (data.departmentId._id == props.value) {
          dummy.push({ value: data._id, label: data.name });
        }
      });
      this.setState({ dummy: dummy, department: props.value });
    } else {
      let employee = [];
      props.forEach(emp => {
        employee.push(emp.value);
      });
      this.setState({ employee });
    }
  };

  handleSubmit = e => {
    e.preventDefault(); // to prevent page reload on submit of form
    // const _this = this;
    const ticket = {
      title: this.state.title,
      customerId: this.state.customer,
      departmentId: this.state.department,
      employeesId: this.state.employee,
      priority: this.state.priority,
      code: this.state.code,
      message: this.state.message
    };
    this.props.handleTicketSubmit(ticket);
  };

  render() {
    console.log("he", this.props);
    return (
      <div>
        <h1>Add tickets</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>
              Code:
              <br />
              <Input
                type="text"
                name="code"
                onChange={this.handleChange}
                value={this.state.code}
              />
            </Label>
            <br />
            <Label>
              Title:
              <Input
                type="text"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </Label>
            <br />
            <Label>
              Customer:
              <Select
                onChange={this.handleSelect}
                name="customers"
                options={this.state.customers}
              ></Select>
            </Label>
            <br />
            <Label>
              Department:
              <Select
                onChange={this.handleSelect}
                name="department"
                options={this.state.departments}
              ></Select>
              <Label>
                Employee:
                <Select
                  options={this.state.dummy}
                  onChange={this.handleSelect}
                  name="employee"
                  isMulti //for multiselect
                ></Select>
              </Label>
            </Label>
            <br />
            <Label>
              Priority:
              <input
                type="radio"
                name="priority"
                value="Low"
                onChange={this.handleChange}
              />
              Low
              <input
                type="radio"
                name="priority"
                value="Medium"
                onChange={this.handleChange}
              />
              Medium
              <input
                type="radio"
                name="priority"
                value="High"
                onChange={this.handleChange}
              />
              High
            </Label>{" "}
            <br />
            <Label>
              message:
              <br />
              <Input
                type="textarea"
                value={this.state.message}
                onChange={this.handleChange}
                name="message"
              />
            </Label>
          </FormGroup>
          <br />
          <Button type="submit" color="btn btn-primary">
            submit
          </Button>
        </Form>
      </div>
    );
  }
}
