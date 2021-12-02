import React from "react";
import {Container,Row,Col,Button,Card} from "react-bootstrap";
import dogs from "../assets/dogs"

const Cards = () => (
    <>
    <Container>
        <h1>Para Adoptar:</h1>
        <Row>
        {
        dogs.map(dog=> 
            <Col xs={6} md={4} lg={3}> 
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={dog.image} />
                    <Card.Body>
                        <Card.Title>{dog.name}</Card.Title>
                        <Card.Text>
                        {dog.description}
                        </Card.Text>
                        <Button variant="primary">Adoptame</Button>
                    </Card.Body>
            </Card>
            </Col>
           )
        }
        </Row>
    </Container>
       
    </>
);
export default Cards;