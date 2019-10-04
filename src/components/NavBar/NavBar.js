import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { TiContacts } from "react-icons/ti";
import { LinkContainer } from "react-router-bootstrap/";

const NavBar = () => (
    <>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <TiContacts />
                    {"Address Book"}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer exact to="/">
                            <Nav.Link>Contacts</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/add-contact">
                            <Nav.Link>Add Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
);

export default NavBar;
