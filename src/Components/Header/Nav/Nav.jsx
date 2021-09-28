import React from 'react';
import { Image, Nav, Link, Navbar, Container, Row } from 'react-bootstrap';

import Logo from '../../../Images/logo.png';

import './nav.css';
import { FaUserCircle } from "react-icons/fa";


function nav() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={Logo} className="top-logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#">Login / Signup <FaUserCircle /> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    )
}

export default nav;
