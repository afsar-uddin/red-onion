import { React, useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import DinnerItem from './DinnerItem';

const DinnerItems = () => {
    const [dinners, setDinners] = useState([]);

    useEffect(() => {
        fetch('https://afsar-uddin.github.io/json-data/red-onion.json')
            .then(res => res.json())
            .then(data => setDinners(data.dinner))
    }, []);

    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    dinners.map(dinner => <DinnerItem
                        dinner={dinner}
                    ></DinnerItem>)
                }
            </Row>
        </Container>
    );

};

export default DinnerItems;