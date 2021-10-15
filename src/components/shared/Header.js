import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Navbar>
                <Container>
                    <Link to="/">
                        <img src="https://i.ibb.co/W3vTsWr/logo2-1.png" alt="Logo" />
                    </Link>
                    {/* <Navbar.Toggle /> */}
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink activeClassName="active" className="cart" to="/cart"><FaShoppingCart /></NavLink>
                        {user?.email ? <button onClick={logOut}>Signout</button> : <NavLink activeClassName="active" to="/signIn" className="signIn">Sign In</NavLink>}
                        {!user?.email && <NavLink activeClassName="active" to="/signUp" className="signUp">Sighn Up</NavLink>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Header;