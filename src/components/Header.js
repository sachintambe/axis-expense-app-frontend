import {Nav, NavDropdown} from 'react-bootstrap';
import React from 'react';

import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import { Button } from 'bootstrap';
// import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './Login';
import LogoutButton from './Logout';




function Header(){
  const { logout, isAuthenticated } = useAuth0();
  // const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  // const { user, isAuthenticated, isLoading } = useAuth0();
    return(
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Expense Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/add-trip">Create Trip</Nav.Link>
          <Nav.Link href="/trip-list">My Trips</Nav.Link>
          <Nav.Link href="/login" class="btn btn-danger" type='button'>Logout</Nav.Link>
            {/* <Nav.Link href="/expense-list">Expenses list</Nav.Link>
            <Nav.Link href="/add-expense">Add Expenses</Nav.Link>
            <Nav.Link href="/update-expense">Update Expenses</Nav.Link> */}
            {/* <button type="submit" class="btn btn-outline-danger">Logout</button> */}
            {/* <p>
              
            <button onClick={() => loginWithRedirect()}>Log In</button>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
            </button>
            </p> */}

            {/* <LogoutButton></LogoutButton> */}
           
           
  
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>)
    
}
export default Header;