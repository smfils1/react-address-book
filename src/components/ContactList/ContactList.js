import React from "react";
import Contact from "../Contact/Contact";
import { v4 } from "uuid";

const ContactList = ({ contacts, className, deleteHandler }) => {
    const createContacts = () =>
        contacts.map(contact => (
            <Contact
                {...contact}
                deleteHandler={deleteHandler}
                width="25rem"
                key={v4()}
            />
        ));

    return <div className={className}>{createContacts()}</div>;
};

export default ContactList;
