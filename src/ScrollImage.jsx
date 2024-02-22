import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardHeader } from 'react-bootstrap';


const ScrollImage = () => {
    const cardStyle1 = {
        height: 'auto',
        width: '100%',
        margin: '10px 20px 10px 0',
    };
    const myh1 = {
        color: 'green',
    };

    return (
        <div  className="container mt-5">
            <h1 className='display-6 fw-bolder text-center' style={{backgroundColor:"lightgrey"}}>Best Seller's</h1><hr />
            <Row>
                <div>
                    <Carousel interval={1500}>
                    <Carousel.Item>
                                    <Row className="justify-content-around align-items-center">
                                        <Col md={3} >
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Dress</CardHeader>
                                                <Card.Img variant="top" src="./img/dress1.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 65% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹1,130</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Pocket's</CardHeader>
                                                <Card.Img variant="top" src="./img/dress2.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 35% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹1,299</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Glasses</CardHeader>
                                                <Card.Img variant="top" src="./img/dress3.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 55% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹890</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Watche's</CardHeader>
                                                <Card.Img variant="top" src="./img/dress4.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 47% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹980</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row>
                                </Carousel.Item>




                                <Carousel.Item>
                                    <Row className="justify-content-around align-items-center">
                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Shoe's</CardHeader>
                                                <Card.Img variant="top" src="./img/dress5.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}> Upto 73% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹780</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Tshirt's</CardHeader>
                                                <Card.Img variant="top" src="./img/dress6.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 63% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹800</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Women Dress's</CardHeader>
                                                <Card.Img variant="top" src="./img/dress7.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 79% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹450</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Sando</CardHeader>
                                                <Card.Img variant="top" src="./img/fashion2.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 69% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹999</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row>
                                </Carousel.Item>
                    </Carousel>
                </div>
            </Row>
        </div>
    );
};

export default ScrollImage;
