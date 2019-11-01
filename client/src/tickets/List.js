import React from "react";
import { Table } from "reactstrap";
import TicketItem from "../../src/tickets/Item";
import axios from "../config/axios";
import { Link } from "react-router-dom";

export default class TicketsList extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: []
    };
  }

  componentDidMount() {
    axios
      .get("/tickets", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const tickets = response.data;
        console.log(tickets);
        this.setState({ tickets });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleRemove = id => {
    if (window.confirm("Are You Sure?")) {
      axios
        .delete(`/tickets/${id}`, {
          headers: {
            "x-auth": localStorage.getItem("token")
          }
        })
        .then(response => {
          if (response.data._id) {
            this.setState(prevState => {
              return {
                tickets: prevState.tickets.filter(ticket => ticket._id != id)
              };
            });
          }
        });
    }
  };

  render() {
    return (
      <div>
        <h2>Tickets</h2>
        <Table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Title</th>
              <th>Customer</th>
              <th>Department</th>
              <th>Employee</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.tickets.map((ticket, index) => {
              return (
                <TicketItem
                  handleRemove={this.handleRemove}
                  index={index}
                  key={ticket.code}
                  ticket={ticket}
                />
              );
            })}
          </tbody>
        </Table>
        <h5>
          <Link to="/tickets/new">Add tickets </Link>
        </h5>
      </div>
    );
  }
}
