import React from "react";
import Header from "../Header/Header";
import AddressBook from "../AddressBook/AddressBook";

const ContactsPage = ({ contacts, searchChangeHandler }) => (
    <div>
        <Header>Contacts</Header>
        <AddressBook
            contacts={contacts}
            searchChangeHandler={searchChangeHandler}
        />
    </div>
);

export default ContactsPage;
