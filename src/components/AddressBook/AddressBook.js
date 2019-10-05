import React from "react";
import ContactList from "../ContactList/ContactList";
import Container from "react-bootstrap/Container";
import SearchBox from "../SearchBox/SearchBox";

const AddressBook = ({ contacts, searchChangeHandler, deleteHandler }) => {
    return (
        <Container>
            <SearchBox
                searchChangeHandler={searchChangeHandler}
                width="20rem"
                className="mx-auto my-5"
            />
            {contacts.length === 0 ? (
                <h2 className="text-center">No Contacts</h2>
            ) : (
                <div>
                    <ContactList
                        contacts={contacts}
                        deleteHandler={deleteHandler}
                        className="d-flex flex-wrap  justify-content-around mb-5"
                    />
                </div>
            )}
        </Container>
    );
};

export default AddressBook;
