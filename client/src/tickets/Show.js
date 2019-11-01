import React from "react";
import axios from "../config/axios";
import { Link } from "react-router-dom";

export default class TicketsShow extends React.Component {
  constructor() {
    super();
    this.state = {
      ticket: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`/api/tickets/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const ticket = response.data;
        this.setState({ ticket });
        console.log(ticket);
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>{this.state.ticket.message}</h2>

        <Link to={`/tickets/edit/${this.state.ticket._id}`}>edit</Link>
      </div>
    );
  }
}
