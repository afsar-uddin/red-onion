import { React, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BreakFastItem from './BreakFastItem';

const BreakfastItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://afsar-uddin.github.io/json-data/red-onion.json')
            .then(res => res.json())
            .then(data => setItems(data.breakfast))
    }, [])
    return (
        <div className="foods-item">
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        items.map(item => <BreakFastItem
                            item={item}
                        >
                        </BreakFastItem>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default BreakfastItems;