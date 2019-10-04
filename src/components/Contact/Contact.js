import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import defaultImg from "../../assets/default-img.png";
import { FaRegTrashAlt } from "react-icons/fa";

const Contact = ({ firstName, lastName, birthday, telephone }) => (
    <Card style={{ maxWidth: "15rem" }}>
        <Card.Img variant="top" src={defaultImg} />
        <Card.Body className="text-center">
            <Card.Title>{firstName + lastName}</Card.Title>
        </Card.Body>
        <ListGroup className="text-center">
            <ListGroupItem>{birthday}</ListGroupItem>
            <ListGroupItem>{telephone}</ListGroupItem>
            <ListGroupItem>
                <Button variant="link">
                    <FaRegTrashAlt />
                </Button>
            </ListGroupItem>
        </ListGroup>
    </Card>
);

export default Contact;
