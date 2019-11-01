import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class CustomerForm extends React.Component {
  constructor(props) {
    //props
    super();
    this.state = {
      name: props.customer ? props.customer.name : "",
      email: props.customer ? props.customer.email : "",
      mobile: props.customer ? props.customer.mobile : ""

      // name: "",
      // email: "",
      // mobile: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile
      //id: this.props.customer._id
    };

    //we want to create an id property and only while editing and not creating a user,this is determined based on if the component has recieved a customer prop

    this.props.customer && (formData.id = this.props.customer._id);

    console.log(formData);
    this.props.handleCustomerSubmit(formData);
  }
  //we want to create an id property and only while editing and not creating a user,this is determined based on if the component has recieved a customer prop

  // componentWillReceiveProps(nextProps) {
  //   console.log("form customer will receive props", nextProps);
  //   const { name, email, mobile } = nextProps.customer;
  //   this.setState({ name, email, mobile });
  // }

  render() {
    console.log("form customer render");
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
          </FormGroup>
          <br />
          <FormGroup>
            <Label>
              Email
              <Input
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
            </Label>
          </FormGroup>
          <br />
          <FormGroup>
            <Label>
              Mobile
              <Input
                type="text"
                value={this.state.mobile}
                onChange={this.handleChange}
                name="mobile"
              />
            </Label>
          </FormGroup>
          <Button color="primary">submit</Button>
        </Form>
      </div>
    );
  }
}
export default CustomerForm;
