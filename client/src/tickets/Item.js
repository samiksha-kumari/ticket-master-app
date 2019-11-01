import React from "react";
import { Button } from "reactstrap";

export default function TicketsItem(props) {
  const { ticket, handleRemove } = props;
  if (ticket._id) {
    return (
      <tr>
        <td>{ticket.code}</td>
        <td>{ticket.title}</td>
        <td>{ticket.customerId.name}</td>
        <td>{ticket.departmentId.name}</td>
        <td>
          {ticket.employeesId.map(employee => {
            return <p>{employee.name}</p>;
          })}
        </td>
        <td>{ticket.priority}</td>
        {/* <td>{ticket.message}</td> */}
        <td>
          <Button
            color="danger"
            onClick={() => {
              handleRemove(ticket._id);
            }}
          >
            remove
          </Button>
        </td>
      </tr>
    );
  } else {
    return (
      <div>
        <h3>There are No Tickets</h3>
      </div>
    );
  }
}
