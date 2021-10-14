import React from 'react';
import { Col } from 'react-bootstrap';

const BreakFastItem = (props) => {
    const { title, subTitle, cover, price } = props.item;
    return (
        <Col>
            <div className="item">
                <img src={cover} alt={title} />
                <h3>{title}</h3>
                <h4>{subTitle}</h4>
                <p> <b>$ {price}</b></p>
            </div>
        </Col>
    );
};

export default BreakFastItem;