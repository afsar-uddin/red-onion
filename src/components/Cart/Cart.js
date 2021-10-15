import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center my-5">
                    <h2>No products added to your cart yet!</h2>
                    <Link to="/shipping">Proceed to shipping</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;