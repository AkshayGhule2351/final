import React from 'react';
import Products from './Products';
import AboutUs from './AboutUs';
import MultipleProducts from './MultipleProducts';
import Mobiles from './Mobiles';
import Laptops from './Laptops';
import { Carousel } from 'react-bootstrap';
import Fashion from './Fashion';
import ScrollImage from './ScrollImage';
import './Home.css';
import hero11 from "./hero11.webp";
import hero22 from "./hero22.webp";
import hero33 from "./hero33.webp";
import hero44 from "./hero44.webp";
import hero55 from "./hero55.webp";
import hero66 from "./hero66.webp";
import hero77 from "./hero77.webp";
import mybackground from "./mybackground.jpg"

const Home = () => {
    return (
        <div className='home '  >
            <Carousel interval={1000} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero11}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero22}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero33}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero44}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero55}
                        alt="Second slide"
                    />

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hero66}
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hero77}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel.Item>

            </Carousel>
            <br />
            <div className="card text-black bg-dark border-0">
                <img src={mybackground} className="card-img" height="650px" alt="..." style={{ marginTop: "-25px" }} />
                <div className="card-img-overlay d-flex flex-column justify-content-center ">
                    <div className="container ">
                        <h5 className="card-title display-4 fw-bolder mb-0 a">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2 animated-title" style={{color:"red"}}>
                            CHECKOUT THE ALL NEW PRODUCTS
                        </p>
                    </div>
                </div>
            </div>



            <Products />
            <Fashion />
            <Mobiles />
            <Laptops />
            <MultipleProducts />
            <ScrollImage />
            <AboutUs />

        </div>
    )
}

export default Home;
