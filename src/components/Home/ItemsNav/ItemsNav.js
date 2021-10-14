import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ItemsNav = () => {
    return (
        <div className="items-nav">
            <Container>
                <NavLink activeClassName="active" exact to="/">Breakfast</NavLink>
                <NavLink activeClassName="active" exact to="/lunch">Lunch</NavLink>
                <NavLink activeClassName="active" exact to="/dinner">Dinner</NavLink>
            </Container>
        </div>
    );
};

export default ItemsNav;