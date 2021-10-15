import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { googleLogin, nameOnBlur, handleSignUp } = useAuth();
    return (
        <Container>
            <Row>
                <Col>
                    <div className="onion-form">
                        <h2>Sign up here</h2>
                        <form>
                            <input type="text" onBlur={nameOnBlur} name="name" id="name" placeholder="Your name" />
                            <input type="text" name="phone" id="phone" placeholder="Phone number" />
                            <input type="email" name="email" id="email" placeholder="Your email" />
                            <input type="password" name="password" id="password" placeholder="Your password" />
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" />
                            <input type="submit" onClick={handleSignUp} value="Submit" />
                        </form>
                        <div className="devider">or</div>
                        <div className="other-signin">
                            <button onClick={googleLogin} ><FaGoogle /></button>
                            <button><FaFacebookF /></button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;