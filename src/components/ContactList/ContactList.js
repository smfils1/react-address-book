import React from "react";
import Container from "react-bootstrap/Container";
import { FaRegTrashAlt } from "react-icons/fa";
import Contact from "../Contact/Contact";
import { v4 } from "uuid";

const ContactList = ({ contacts }) => {
    const createContacts = () =>
        contacts.map(contact => (
            <Contact {...contact} width="25rem" key={v4()} />
        ));
    console.log(createContacts());

    return (
        <Container>
            <div className="d-flex flex-wrap align-items-between justify-content-around">
                {createContacts()}
            </div>
        </Container>
    );
};

export default ContactList;
