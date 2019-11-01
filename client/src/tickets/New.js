import React from "react";
import TicketsForm from "./Form";
import axios from "../config/axios";
import { withRouter } from "react-router-dom";

class TicketsNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: {}
    };
  }
  handleTicketSubmit = ticket => {
    const _this = this;
    axios
      .post("/api/tickets", ticket, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        if (response.data.errors) {
          window.alert(response.data.message);
          console.log("validation errors", response.data.errors);
        } else {
          console.log("success", response.data);
          _this.props.history.push("/tickets");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <TicketsForm handleTicketSubmit={this.handleTicketSubmit} />
      </div>
    );
  }
}

export default withRouter(TicketsNew);
