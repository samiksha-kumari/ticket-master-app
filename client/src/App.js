import React from "react";
import Home from "./Home/intro";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import CustomersList from "./components/customers/Lists";
import CustomerNew from "./components/customers/New";
import CustomerShow from "./components/customers/Show";
import CustomerEdit from "./components/customers/Edit";

import DepartmentList from "./components/departments/Lists";

import EmployeeList from "./components/employees/Lists";
import EmployeeNew from "./components/employees/New";
import EmployeeShow from "./components/employees/Show";
import EmployeeEdit from "./components/employees/Edit";

import TicketsList from "./tickets/List";
import TicketsNew from "./tickets/New";
import TicketsShow from "./tickets/Show";

import Login from "./user-auth/Login";
import Register from "./user-auth/Register";
import Logout from "./user-auth/Logout";

import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
//render - property

function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <div>
        <Navbar color="light" light expand="md" className="mb-5">
          <NavbarBrand>Ticket Master</NavbarBrand>
          <Nav className="ml-auto">
            {Object.keys(props.user).length == 0 ? (
              <React.Fragment>
                <NavItem>
                  <Link className="nav-link text-primary" to="/users/login">
                    Login
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link text-primary" to="/users/register">
                    Register
                  </Link>
                </NavItem>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <NavItem>
                  <Link className="nav-link text-primary" to="/">
                    Home
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link text-primary" to="/customers">
                    Customers
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link text-primary" to="/departments">
                    Departments
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link text-primary" to="/employees">
                    Employees
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link text-primary" to="/tickets">
                    Tickets
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link text-primary" to="/users/logout">
                    Logout
                  </Link>
                </NavItem>
              </React.Fragment>
            )}
          </Nav>
        </Navbar>

        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/customers" component={CustomersList} exact={true} />
            <Route path="/customers/new" component={CustomerNew} exact={true} />
            <Route path="/customers/edit/:id" component={CustomerEdit} />
            <Route path="/customers/:id" component={CustomerShow} />

            <Route path="/departments" component={DepartmentList} />
            <Route path="/employees" component={EmployeeList} exact={true} />
            <Route path="/employees/new" component={EmployeeNew} />
            <Route path="/employees/edit/:id" component={EmployeeEdit} />
            <Route path="/employees/:id" component={EmployeeShow} />

            <Route path="/tickets" component={TicketsList} exact={true} />
            <Route path="/tickets/new" component={TicketsNew} exact={true} />
            <Route path="/tickets/:id" component={TicketsShow} exact={true} />

            <Route path="/users/register" component={Register} exact={true} />
            <Route path="/users/login" component={Login} exact={true} />
            <Route path="/users/logout" component={Logout} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
