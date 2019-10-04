import React, { Component } from "react";
import ContactList from "../ContactList/ContactList";
import Container from "react-bootstrap/Container";
import SearchBox from "../SearchBox/SearchBox";

const AddressBook = ({ contacts, searchChangeHandler }) => {
    return (
        <Container>
            <SearchBox
                searchChangeHandler={searchChangeHandler}
                width="20rem"
                className="mx-auto my-5"
            />

            <div>
                <ContactList
                    contacts={contacts}
                    className="d-flex flex-wrap  justify-content-around mb-5"
                />
            </div>
        </Container>
    );
};

export default AddressBook;
