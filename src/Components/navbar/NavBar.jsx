import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="navbar navbar-dark fixed-top" >
        <Container>
          <Navbar.Brand href="#home">TazaKhabar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/business" className="nav-link">
                Business
              </NavLink>
              <NavLink to="/entertainment" className="nav-link">
                Entertainment
              </NavLink>
              <NavLink to="/general" className="nav-link">
                General
              </NavLink>
              <NavLink to="/health" className="nav-link">
                Health
              </NavLink>
              <NavLink to="/science" className="nav-link">
                Science
              </NavLink>
              <NavLink to="/sports" className="nav-link">
                Sports
              </NavLink>
              <NavLink to="/technology" className="nav-link">
                Technology
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
