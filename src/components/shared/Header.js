import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Banner from '../Home/Banner';


const Header = () => {
    return (
        <div className="header">
            <Navbar>
                <Container>
                    <Link to="/">
                        <img src="https://i.ibb.co/W3vTsWr/logo2-1.png" alt="Logo" />
                    </Link>
                    {/* <Navbar.Toggle /> */}
                    <Navbar.Collapse className="justify-content-end">
                        <Link className="cart" to="/"><FaShoppingCart /></Link>
                        <button className="signIn">Sign In</button>
                        <button className="signUp">Sighn Up</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Header;