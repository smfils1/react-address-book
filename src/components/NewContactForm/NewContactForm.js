import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap/";

const NewContactForm = ({
    className,
    submitHandler,
    fnameChangeHandler,
    lnameChangeHandler,
    phoneChangeHandler,
    birthDateChangeHandler
}) => {
    return (
        <Form className={className}>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    onChange={fnameChangeHandler}
                    type="text"
                    name="fname"
                    placeholder="Enter First Name"
                />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    onChange={lnameChangeHandler}
                    type="text"
                    placeholder="Enter Last Name"
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Telephone #</Form.Label>
                <Form.Control
                    onChange={phoneChangeHandler}
                    type="tel"
                    placeholder="Telephone #"
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                    onChange={birthDateChangeHandler}
                    type="date"
                    placeholder="Birth Date"
                />
            </Form.Group>
            <LinkContainer to="/">
                <Button type="submit" onClick={submitHandler}>
                    Add Contact
                </Button>
            </LinkContainer>
        </Form>
    );
};

export default NewContactForm;
