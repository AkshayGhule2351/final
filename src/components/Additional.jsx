import React, { PureComponent } from 'react';
import { CardBody, CardGroup, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export class Additional extends PureComponent {
  render() {
    
    const cardStylecard = {
        width: '20rem',
        margin: '10px',
        border: '1px solid black',
      
    };
    return (
      <>
      <div>
          {/* 1st Image */}
          <div class="myAbout" style={{ marginBottom: "40px", marginLeft: "3px" }}>
                    <div className="container " style={{ marginBottom: "20px" }}>

                        <div className="row" style={{boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", backgroundColor:"light"}}>
                            <div className="col-md-5">
                                <img style={{ marginTop: "20px" }} src="./Pics/heaphones9.jpg" alt="Description of the image" className="img-fluid" />
                            </div>

                            <div className="col-md-7">

                                <Card.Body>
                                    <Card.Title>bAot 102.NB With Upto 24 hour Play Back Bluetooth Headset Neckband Bluetooth Headset  (Black, In the Ear)</Card.Title>

                                    <Card.Subtitle className="mb-2 " style={{ marginTop: "10px" }} >
                                        <span style={{ fontSize: "1.5em" }}>₹ 649</span>
                                        <span className=" text-muted" style={{ textDecoration: "line-through", marginLeft: "10px" }}>₹ 849</span>
                                        <span style={{ color: "green", marginLeft: "10px" }}> 74% off</span>
                                    </Card.Subtitle>

                                    <h2>Available offers</h2>
                                    <Card.Text>
                                        <ul>
                                            <li>Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above  <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹10,000 and above  <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Buy this product and Get Extra ₹100 Off on Select Room Heaters <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                        </ul>
                                    </Card.Text>
                                    <Link to="/login">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>

                                </Card.Body>

                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd Image */}
                <div class="myAbout" style={{  marginBottom: "40px", marginLeft: "3px" }}>
                    <div className="container " style={{ marginBottom: "20px" }}>

                        <div className="row" style={{boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", backgroundColor:"light"}}>
                            <div className="col-md-5">
                                <img style={{ marginTop: "20px" }} src="./Pics/heaphones8.jpg" alt="Description of the image" className="img-fluid" />
                            </div>

                            <div className="col-md-7">

                                <Card.Body>
                                    <Card.Title>Worricow Wireless Bluetooth ortable Sports Headphone with Microphone Bluetooth Headset  (Black, In the Ear)</Card.Title>

                                    <Card.Subtitle className="mb-2 " style={{ marginTop: "10px" }} >
                                        <span style={{ fontSize: "1.5em" }}>₹ 475</span>
                                        <span className=" text-muted" style={{ textDecoration: "line-through", marginLeft: "10px" }}>₹ 649</span>
                                        <span style={{ color: "green", marginLeft: "10px" }}> 52% off</span>
                                    </Card.Subtitle>

                                    <h2>Available offers</h2>
                                    <Card.Text>
                                        <ul>
                                            <li>Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Buy this product and Get Extra ₹100 Off on Select Room Heaters <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                        </ul>
                                    </Card.Text>
                                    <Link to="/signup">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>

                                </Card.Body>

                            </div>
                        </div>
                    </div>

                </div>





                {/* 3rd Image */}
                <div class="myAbout" style={{  marginBottom: "40px", marginLeft: "3px" }}>
                    <div className="container " style={{ marginBottom: "20px" }}>

                        <div className="row" style={{boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", backgroundColor:"light"}}>
                            <div className="col-md-5">
                                <img style={{ marginTop: "20px" }} src="./Pics/heaphones7.jpg" alt="Description of the image" className="img-fluid" />
                            </div>

                            <div className="col-md-7">

                                <Card.Body>
                                    <Card.Title>Worricow Wireless Bluetooth ortable Sports Headphone with Microphone Bluetooth Headset  (Red, In the Ear)</Card.Title>

                                    <Card.Subtitle className="mb-2 " style={{ marginTop: "10px" }} >
                                        <span style={{ fontSize: "1.5em" }}>₹ 675</span>
                                        <span className=" text-muted" style={{ textDecoration: "line-through", marginLeft: "10px" }}>₹ 949</span>
                                        <span style={{ color: "green", marginLeft: "10px" }}> 58% off</span>
                                    </Card.Subtitle>

                                    <h2>Available offers</h2>
                                    <Card.Text>
                                        <ul>

                                            <li>Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Buy this product and Get Extra ₹100 Off on Select Room Heaters <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                        </ul>

                                    </Card.Text>
                                    <Link to="/signup">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>


                                </Card.Body>


                            </div>
                        </div>
                    </div>

                </div>


                {/* 4th Image */}
                <div class="myAbout" style={{  marginBottom: "40px", marginLeft: "3px" }}>
                    <div className="container " style={{ marginBottom: "20px" }}>

                        <div className="row" style={{boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", backgroundColor:"light"}}>
                            <div className="col-md-5">
                                <img style={{ marginTop: "20px" }} src="./Pics/heaphones6.jpg" alt="Description of the image" className="img-fluid" />
                            </div>

                            <div className="col-md-7">

                                <Card.Body>
                                    <Card.Title>OnePlus Bullets Wireless Z2 ANC Bluetooth in Ear Earphones with 45dB Hybrid ANC Bluetooth Headset  (Boomin Black, In the Ear)</Card.Title>

                                    <Card.Subtitle className="mb-2 " style={{ marginTop: "10px" }} >
                                        <span style={{ fontSize: "1.5em" }}>₹ 2,299</span>
                                        <span className=" text-muted" style={{ textDecoration: "line-through", marginLeft: "10px" }}>₹ 2,499</span>
                                        <span style={{ color: "green", marginLeft: "10px" }}> 58% off</span>
                                    </Card.Subtitle>

                                    <h2>Available offers</h2>
                                    <Card.Text>
                                        <ul>

                                            <li>Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Buy this product and Get Extra ₹100 Off on Select Room Heaters <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                        </ul>

                                    </Card.Text>
                                    <Link to="/signup">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>


                                </Card.Body>


                            </div>
                        </div>
                    </div>

                </div>


      </div>
      </>
    )
  }
}

export default Additional
