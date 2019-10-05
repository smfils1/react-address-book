import React from "react";
import Header from "../Header/Header";
import AddressBook from "../AddressBook/AddressBook";

const ContactsPage = ({ contacts, searchChangeHandler, deleteHandler }) => (
    <div>
        <Header>Contacts</Header>
        <AddressBook
            contacts={contacts}
            searchChangeHandler={searchChangeHandler}
            deleteHandler={deleteHandler}
        />
    </div>
);

export default ContactsPage;
