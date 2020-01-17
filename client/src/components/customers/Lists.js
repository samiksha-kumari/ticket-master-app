import React from "react";
import axios from "../../config/axios"; //axios
import CustomerItem from "./customerItem";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

class CustomersList extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    axios
      .get("/customers", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const customers = response.data;
        this.setState({
          customers
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  // const customers = response

  //this.setState({customers})
  // console.log(response.data)

  handleRemove(id) {
    axios
      .delete(`/customers/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response.data);
        if (response.data._id) {
          this.setState(prevState => {
            return {
              customers: prevState.customers.filter(
                customer => customer._id !== id
              )
            };
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2> Listing Customers - {this.state.customers.length} </h2>
        <Table striped>
          <thead>
            <tr>
              <th> Id </th>
              <th> Name </th>
              <th> Email </th>
              <th> Mobile </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer, index) => {
              return (
                <CustomerItem
                  key={customer._id}
                  id={customer._id}
                  index={index}
                  name={customer.name}
                  email={customer.email}
                  mobile={customer.mobile}
                  handleRemove={this.handleRemove}
                />
              );
            })}
          </tbody>
        </Table>

        <Link to="/customers/new">Add Customer</Link>

      </div>
    );
  }
}
export default CustomersList;
