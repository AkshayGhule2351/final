import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Laptops = () => {
    
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
       <div className='Cardone' id='laptop'>
       <h1 className='display-6 fw-bolder text-center' style={{backgroundColor:"lightgrey"}}>Best Laptops</h1><hr />
                        <div>
                            <CardGroup style={cardStyle} >
                                <Card className="text-center" style={cardStylecard}>
                                    <Card.Header>Asus Laptop's</Card.Header>
                                    <Card.Img variant="top" src="./img/asus.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>ASUS TUF Gaming F15 - AI Powered Gaming Intel Core i5 11th Gen 11260H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050/144 Hz/70 W) </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹49,990</Card.Subtitle>

                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>

                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Dell Laptop's</Card.Header>
                                    <Card.Img variant="top" src="./img/dell.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>DELL Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (15.6 Inch, Platinum Silver, 1.65 Kg, With MS Office)  </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹39,900</Card.Subtitle>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Lenova Laptop's</Card.Header>
                                    <Card.Img variant="top" src="./img/lenova.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>Lenovo IdeaPad Slim 1 Intel Celeron Dual Core N4020 - (8 GB/256 GB SSD/Windows 11 Home) Dual Core N4020 14IGL7 Thin and Light Laptop  (14 Inch, Cloud Grey, 1.3 Kg, With MS Office)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹19,999</Card.Subtitle>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Sony Laptop's</Card.Header>
                                    <Card.Img variant="top" src="./img/sony.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>SONY TUF Gaming F15 with 90WHr Battery  - (Windows 11 / Graphics/NVIDIA GeForce RTX 3050/144 Hz/75 W) FX506HC-HN362W Gaming Laptop  (15.6 Inch, Graphite Black, 2.30 Kg)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">32,990</Card.Subtitle>

                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>

                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>HP Laptop's</Card.Header>
                                    <Card.Img variant="top" src="./img/hp.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>HP Pavilion (2023) Eyesafe AMD Ryzen 5 Hexa Core 5625U - (16 GB/512 GB SSD/Windows 11 Home) 14-EC1019AU Thin and Light Laptop  (14 inch, Natural Silver, 1.41 kg, With MS Office)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹64,999</Card.Subtitle>
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

export default Laptops
