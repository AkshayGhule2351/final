
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import mylogo2 from './mylogo2.gif';



const Footer = () => {
    return (
        <footer className="mt-2 py-3 bg-dark text-light">
            <Container>
                 <Row>
                    <Col md={4} style={{ borderRight: "1px solid white" }} className="about-us-column">
                        <h5>About Us</h5>
                        <ul>
                            <li>Expert Team</li>
                            <li>Tailored Solutions</li>
                            <li>Data-Driven Approach</li>
                            <li>Innovation & Creativity</li>
                            <li>Client-Centric Focus</li>
                            <li>Brand Development</li>
                        </ul>
                    </Col>
                    <Col md={3} style={{ borderRight: "1px solid white" }} className="about-us-column">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="aboutus">About Us</a></li>
                            <li><a href="contactus">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={3} style={{ borderRight: "1px solid white" }} className="about-us-column">
                        <h5>Contact Information</h5>
                        <p>Address: 123 ABC Street, City, Country</p>
                        <p>Email: akshay@gmail.com</p>
                        <p>Phone: +1234567890</p>
                    </Col>
                    <Col md={2}>
                        <h5>Follow Us</h5>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a><br />
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /> </a><br />
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /> </a>
                    </Col>
                </Row>
                <Row>
                    <div className="text-center py-2">
                        <h3 className="mt-2 py-3 t">Shop for the Best quality Online is
                            <span>
                                <NavLink className="navbar-brand fw-bold fs-3" to="/" >
                                    <img src={mylogo2} alt="ABG Logo" />
                                </NavLink>
                            </span>
                        </h3>
                    </div>


                    <p style={{ fontSize: '12px', fontWeight: '100' }}>  In today’s market, you can find monitors that are Full HD, 4K, HD Ready, and different display types such as Plasma, LED, LCD, and many other varieties. Thus, you have a multitude of options to choose from. And, it is imperative to choose a good quality monitor as it will not only provide you with great clarity (so that you get an immersive experience every time), but will also protect your eyes from damage even after extended use. </p>
                </Row>
            </Container>
            <div className="text-center py-2">
                &copy; {new Date().getFullYear()} akshay.com | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
