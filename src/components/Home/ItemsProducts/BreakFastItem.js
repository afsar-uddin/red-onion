import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreakFastItem = (props) => {
    const { title, subTitle, cover, price, id } = props.item;
    return (
        <Col>
            <Link className="item" to={`/breakfast/${id}`}>
                <img src={cover} alt={title} />
                <h3>{title}</h3>
                <h4>{subTitle}</h4>
                <p> <b>$ {price}</b></p>
            </Link>
        </Col>
    );
};

export default BreakFastItem;