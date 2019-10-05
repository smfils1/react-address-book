import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { TiContacts } from "react-icons/ti";
import { LinkContainer } from "react-router-bootstrap/";
import style from "./NavBar.module.css";

const NavBar = ({ location }) => {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className={style.logoText}>
                            <TiContacts className={style.logo} />
                            {"Address Book"}
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer exact to="/">
                                <Nav.Link className={style.link} active={false}>
                                    Contacts
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/add-contact">
                                <Nav.Link className={style.link} active={false}>
                                    Add Contact
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
