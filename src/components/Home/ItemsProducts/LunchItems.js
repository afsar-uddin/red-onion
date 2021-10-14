import { React, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import LunchItem from './LunchItem';

const LunchItems = () => {
    const [lunchs, setLunchs] = useState([]);

    useEffect(() => {
        fetch('https://afsar-uddin.github.io/json-data/red-onion.json')
            .then(res => res.json())
            .then(data => setLunchs(data.lunch))
    }, []);

    return (
        <>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        lunchs.map(lunch => <LunchItem
                            key={lunch.id}
                            lunch={lunch}
                        ></LunchItem>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default LunchItems;