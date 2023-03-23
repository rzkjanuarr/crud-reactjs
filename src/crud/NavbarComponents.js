import React from "react";
import {
  NavDropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Navbar.Brand href="#home">CRUD REACT JS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
