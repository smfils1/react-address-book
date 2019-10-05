import React from "react";
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";

import NewContactForm from "../NewContactForm/NewContactForm";

const AddContactPage = ({
    submitHandler,
    fnameChangeHandler,
    lnameChangeHandler,
    phoneChangeHandler,
    birthDateChangeHandler
}) => (
    <Container>
        <Header>Add Contact</Header>
        <NewContactForm
            className="m-auto w-sm-75"
            submitHandler={submitHandler}
            fnameChangeHandler={fnameChangeHandler}
            lnameChangeHandler={lnameChangeHandler}
            phoneChangeHandler={phoneChangeHandler}
            birthDateChangeHandler={birthDateChangeHandler}
        />
    </Container>
);

export default AddContactPage;
