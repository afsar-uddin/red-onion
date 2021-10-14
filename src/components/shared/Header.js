import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


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
            <div className="banner">
                <img src="https://i.ibb.co/17KQpw5/bannerbackground.png" alt="home banner" />
                <h1>Best food waiting for your belly</h1>
                <div className="search">
                    <input type="text" placeholder="Search your favourite foods" />
                    {/* <button><FaSearch /></button> */}
                </div>
            </div>
        </div>
    );
};

export default Header;