import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <Link to="/" className="navbar-brand text-white pointer">
          CFK
        </Link>
        <Nav className="me-auto">
          <Link to="/" className="nav-link text-white pointer">
            Home
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;