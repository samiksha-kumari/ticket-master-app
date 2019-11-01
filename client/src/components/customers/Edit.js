import React from "react";
import axios from "../../config/axios";
import CustomerForm from "./Form";

export default class CustomerEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      customer: {}
    };
  }
  handleCustomerSubmit = customer => {
    console.log("edit", customer);
    axios
      .put(`/api/customers/${customer.id}`, customer, {
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
          this.props.history.push(`/customers/${response.data._id}`);
        }
      });
  };

  componentDidMount() {
    console.log("edit customer component did mount");
    const id = this.props.match.params.id;
    axios
      .get(`/api/customers/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const customer = response.data;
        this.setState({ customer });
      });
  }
  render() {
    return (
      <div>
        <h2>Edit Customer</h2>
        {Object.keys(this.state.customer).length !== 0 && (
          <CustomerForm
            customer={this.state.customer}
            handleCustomerSubmit={this.handleCustomerSubmit}
          />
        )}

        {/* <CustomerForm
          customer={this.state.customer}
          handleCustomerSubmit={this.handleSubmit}
        /> */}
      </div>
    );
  }
}
