import React from "react";
import axios from "../../config/axios";
import { Link } from "react-router-dom";

export default class CustomerShow extends React.Component {
  constructor() {
    super();
    this.state = {
      customer: {}
    };
  }

  componentDidMount() {
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
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.customer.name} - {this.state.customer.email}
        </h2>
        <h5>
          <Link to={`/customers/edit/${this.state.customer._id}`}>edit</Link>{" "}
        </h5>
      </div>
    );
  }
}
