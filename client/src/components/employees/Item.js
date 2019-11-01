// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "reactstrap";
// import axios from "../../config/axios";

// class EmployeeItem extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       employees: []
//     };
//   }
//   componentDidMount() {
//     axios.get("/employees").then(response => {
//       const employees = response.data;
//       this.setState({
//         employees
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Listing :- {this.state.employees.length}</h2>
//       </div>
//     );
//   }
// }

// export default EmployeeItem;

//   const { employee, index, handleRemove } = props;

//   console.log(employee);
//   return (
//     <tr>
//       <td>{index + 1}</td>
//       <td>
//         <Link to={`/employees/${employee._id}`}>{employee.name}</Link>
//       </td>
//       <td>{employee.email}</td>
//       <td>{employee.mobile} </td>
//       <td>{employee.departmentId.name}</td>
//       {/* {employee.department !== null ? (
//         <td>{employee.department.name}</td>
//       ) : (
//         <td></td>
//       )} */}

//       <td>
//         <Button
//           color="info"
//           onClick={() => {
//             handleRemove(employee._id);
//           }}
//         >
//           remove
//         </Button>
//       </td>
//     </tr>
//   );
// }
