import React from "react";
import CustomerForm from "./Form";
import axios from "../../config/axios";

class CustomerNew extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
    this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this);
  }

  handleCustomerSubmit(customer) {
    axios
      .post("/api/customers", customer, {
        //https://dct-ticket-master.herokuapp.com/customers
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        if (response.data.errors) {
          console.log("validation error", response.data.errors);
        } else {
          console.log("success");
          this.props.history.push("/customers");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // method
    return (
      <div>
        <h2>Add Customer</h2>
        <CustomerForm handleCustomerSubmit={this.handleCustomerSubmit} />
      </div>
    );
  }
}
export default CustomerNew;
