import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';


const SignIn = () => {
    const { googleLogin } = useAuth();
    return (
        <Container>
            <Row>
                <Col>
                    <div className="onion-form">
                        <h2>Sign in here</h2>
                        <form>
                            <input type="email" name="email" id="email" placeholder="Your email" />
                            <input type="password" name="password" id="password" placeholder="Your password" />
                            <input type="submit" value="Submit" />
                        </form>
                        <div className="devider">or</div>
                        <div className="other-signin">
                            <button onClick={googleLogin}><FaGoogle /></button>
                            <button><FaFacebookF /></button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;