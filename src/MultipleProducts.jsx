import React from 'react';
import Card from "react-bootstrap/Card";
import { CardBody, CardGroup, CardText } from "react-bootstrap";
import mencloth from './mencloth.jpg';
import menfootwear from './menfootwear.jpg';
import menwatch from './menwatch.jpg';
import menbags from './menbags.jpg';
import femalecloth from './femalecloth.jpg';
import femalefootwear from './femalefootwear.jpg';
import femalewatch from './femalewatch.jpg';
import femalebags from './femalebags.jpg';
import freedelivery from './freedelivery.jpg';
import latestmovies from './latestmovies.jpg';
import freemusic from './freemusic.jpg';
import cashback from './cashback.jpg';


const MultipleProducts = () => {
    const cardStylecard = {
        width: '20rem',
        margin: '10px',
        border: '1px solid black',

    };
    return (
        <>
            <div className="container mt-5">
                <div className='Cardone' id='mobile'>
                <h1 className='display-6 fw-bolder text-center' style={{backgroundColor:"lightgrey"}}>Best Offer's</h1><hr />
                    <div>

                        <CardGroup >
                            <Card className="text-center" style={cardStylecard} >
                                <Card.Header>Minimum 50% off | Top styles for him</Card.Header>
                                <Card.Body>
                                    <Card className="text-center" style={{ border: "none" }} >

                                        <div class="row">
                                            <div class="col-md-6">


                                                <a href="#"> <Card.Img variant="top" src={mencloth}></Card.Img>
                                                </a>
                                                <p>Clothing</p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#"> <Card.Img variant="top" src={menfootwear}></Card.Img></a>

                                                <p>Footwear</p>
                                            </div>
                                        </div>

                                        <div class="row" >
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src={menwatch}></Card.Img></a>
                                                <p>Watches</p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#">  <Card.Img variant="top" src={menbags}></Card.Img></a>
                                                <p>Bags and Wallet's</p>
                                            </div>
                                        </div>

                                    </Card>

                                </Card.Body>


                            </Card>



                            <Card className="text-center" style={cardStylecard}>
                                <Card.Header>Minimum 50% off | Top styles for her</Card.Header>
                                <Card.Body>
                                    <Card className="text-center" style={{ border: "none" }} >

                                        <div class="row">
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src={femalecloth}></Card.Img></a>
                                                <p>Clothing</p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#"> <Card.Img variant="top" src={femalefootwear}></Card.Img></a>
                                                <p>Footwear</p>
                                            </div>
                                        </div>

                                        <div class="row" >
                                            <div class="col-md-6">
                                                <a href="#"> <Card.Img variant="top" src={femalewatch}></Card.Img></a>
                                                <p>Watches</p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src={femalebags}></Card.Img></a>
                                                <p>Bags and Wallet's</p>
                                            </div>
                                        </div>

                                    </Card>

                                </Card.Body>


                            </Card>


                            <Card className="text-center" style={cardStylecard}>
                                <Card.Header>Try Prime today</Card.Header>
                                <Card.Body>
                                    <Card className="text-center" style={{ border: "none" }} >

                                        <div class="row">
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src={freedelivery}></Card.Img></a>
                                                <p>FREE 1-day delivery </p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src={latestmovies}></Card.Img></a>
                                                <p>Latest Movies </p>
                                            </div>
                                        </div>

                                        <div class="row" >
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src={freemusic}></Card.Img></a>
                                                <p>Ad-free Music</p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#"> <Card.Img variant="top" src={cashback}></Card.Img></a>
                                                <p>5% Cashback</p>
                                            </div>
                                        </div>

                                    </Card>

                                </Card.Body>


                            </Card>

                        </CardGroup>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultipleProducts
