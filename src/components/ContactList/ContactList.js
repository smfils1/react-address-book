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

    return <>{createContacts()}</>;
};

export default ContactList;
