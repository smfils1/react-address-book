import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import defaultImg from "../../assets/default-img.png";
import { FaRegTrashAlt } from "react-icons/fa";

const Contact = ({ FirstName, LastName, Birthday, Telephone, width }) => (
    <Card style={{ width }}>
        <Row className="no-gutters">
            <Col xs={3}>
                <Card.Img src={defaultImg} />
            </Col>
            <Col xs={7}>
                <div className="ml-3 mt-2">
                    <Card.Title>{`${FirstName}  ${LastName}`}</Card.Title>
                    <Card.Subtitle className="mb-1 text-muted">
                        {Telephone}
                    </Card.Subtitle>
                    <Card.Text>{Birthday}</Card.Text>
                </div>
            </Col>
            <Col xs={2} className="mt-auto mb-2 text-center">
                <Button variant="danger">
                    <FaRegTrashAlt />
                </Button>
            </Col>
        </Row>
    </Card>
);

export default Contact;
