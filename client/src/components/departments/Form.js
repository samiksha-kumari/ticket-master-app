import React from "react";
import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input, Row } from "reactstrap";

export default class DepartmentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  } //onClick in label we will activated by 'for'
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name
    };
    this.props.handleFormSubmit(formData);
  };
  //{this.handleSubmit.bind}

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="name">name:</Label>
          <FormGroup>
            <Input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              id="name"
            ></Input>
          </FormGroup>

          <Button color="btn btn-primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
    );
  }
}
