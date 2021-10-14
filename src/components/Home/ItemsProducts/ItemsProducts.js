import React from 'react';
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import BreakfastItems from './BreakfastItems';
import DinnerItems from './DinnerItems';
import LunchItems from './LunchItems';

const ItemsProducts = () => {
    return (
        <Container className="onion-products">
            <Row>
                <Tabs defaultActiveKey="breakfast"
                    id="controlled-tab-example">
                    <Tab eventKey="breakfast" title="Breakfast">
                        <BreakfastItems></BreakfastItems>
                    </Tab>
                    <Tab eventKey="profile" title="Lunch">
                        <LunchItems></LunchItems>
                    </Tab>
                    <Tab eventKey="contact" title="Dinner">
                        <DinnerItems></DinnerItems>
                    </Tab>
                </Tabs>

            </Row>
        </Container>
    );
};

export default ItemsProducts;