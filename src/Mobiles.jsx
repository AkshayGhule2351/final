import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {  CardGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Mobiles = () => {

    const cardStyle = {

        marginTop: '20px',
    };

    const cardStylecard = {
        width: '20rem',
        margin: '10px',
        border: '1px solid black'
    };
  return (
    <div className="container mt-5">
      <div className='Cardone' id='mobile'>
      <h1 className='display-6 fw-bolder text-center' style={{backgroundColor:"lightgrey"}}>Best Mobiles</h1><hr />
                        <div>
                            <CardGroup style={cardStyle} >
                                <Card className="text-center" style={cardStylecard}>
                                    <Card.Header>Poco Phone's</Card.Header>
                                    <Card.Img variant="top" src="./img/poco.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>POCO F5 5G (Electric Orange, 256 GB)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹26,999</Card.Subtitle>
                                        <Card.Text>
                                            <ul>
                                                <li>8 GB RAM | 256 GB ROM</li>
                                                <li>16.94 cm (6.67 inch) Full HD+ Display</li>

                                                <li>Dimensity 7050 Processor</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>

                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>iPhone Phone's</Card.Header>
                                    <Card.Img variant="top" src="./img/iphone.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>APPLE iPhone 13 (Yellow, 128 GB)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹59,900</Card.Subtitle>
                                        <Card.Text>
                                            <ul>
                                                <li>128 GB ROM</li>
                                                <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                                                <li>A15 Bionic Chip Processor </li>
                                                <li>5000 mAh Battery</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Realme Phone's</Card.Header>
                                    <Card.Img variant="top" src="./img/realme.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>realme 11 Pro 5G (Astral Black, 256 GB)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹27,999</Card.Subtitle>
                                        <Card.Text>
                                            <ul>
                                                <li>12 GB RAM | 256 GB ROM</li>
                                                <li>17.02 cm (6.7 inch) Full HD+ Display</li>
                                                <li>A12 Bionic Chip Processor </li>
                                                <li>5000 mAh Battery</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Samsung Phone's</Card.Header>
                                    <Card.Img variant="top" src="./img/samsung.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>SAMSUNG Galaxy S22 5G</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹39,999</Card.Subtitle>
                                        <Card.Text>
                                            <ul>
                                                <li>8 GB RAM | 128 GB ROM</li>
                                                <li>15.49 cm (6.1 inch) Full HD+ Display</li>
                                                <li>3700 mAh Lithium-ion Battery</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>

                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Vivo Phone's</Card.Header>
                                    <Card.Img variant="top" src="./img/vivo.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>vivo T2 Pro 5G (Dune Silver, 256 GB)  (8 GB RAM)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹24,999</Card.Subtitle>
                                        <Card.Text>
                                            <ul>
                                                <li>8 GB RAM | 256 GB ROM</li>
                                                <li>17.22 cm (6.78 inch) Full HD+ Display</li>
                                                <li>4600 mAh Battery</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                            </CardGroup>
                            
                        </div>
                        
                    </div>
    </div>
  )
}

export default Mobiles;
