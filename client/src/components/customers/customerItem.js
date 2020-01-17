import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function CustomerItem(props) {
  const { id, name, index, email, mobile, handleRemove } = props; //instead of making props.id (used object destructuring)
  return (
    <tr>
      <td> {index + 1}</td>
      <td>
        <Link to={`/customers/${id}`}>{name}</Link>
      </td>
      <td> {email}</td>
      <td >{mobile} </td>
      <td>
        <Button
          onClick={() => {
            const confirm = window.confirm("Are You Sure Want To Remove?");
            if (confirm) {
              handleRemove(id);
            }
          }}
          color="danger"
        >
          remove
        </Button>
      </td>
    </tr>
  );
}
