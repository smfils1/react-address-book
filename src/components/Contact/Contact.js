import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import defaultImg from "../../assets/default-img.png";
import { FaRegTrashAlt } from "react-icons/fa";

const Contact = ({ firstName, lastName, birthday, telephone }) => (
    <Card style={{ maxWidth: "25rem" }}>
        <Row className="no-gutters">
            <Col xs={4}>
                <Card.Img src={defaultImg} />
            </Col>
            <Col xs={6}>
                <Card.Body>
                    <Card.Title>{`${firstName}  ${lastName}`}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {telephone}
                    </Card.Subtitle>
                    <Card.Text>{birthday}</Card.Text>
                </Card.Body>
            </Col>
            <Col xs={2} className="mt-auto mb-2">
                <Button variant="danger">
                    <FaRegTrashAlt />
                </Button>
            </Col>
        </Row>
    </Card>
);

export default Contact;
