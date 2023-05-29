import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <Navbar.Brand href="#home">TidyTaskers</Navbar.Brand>
          <Nav>
            <Nav.Link href="#CallUs">Call Us</Nav.Link>
            <Nav.Link href="#Location">Location</Nav.Link>
            <Nav.Link href="#EmailUs">Mail Us</Nav.Link>
          </Nav>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#services">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#our-work">Our work</Nav.Link>
              <Nav.Link href="#blog">Cleaning Tips</Nav.Link>
              <Nav.Link href="#contact">Get in Touch</Nav.Link>
              <Nav.Link href="#booking">Book a Cleaning</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
