import React from 'react';
import Products from './Products';
import AboutUs from './AboutUs';
import MultipleProducts from './MultipleProducts';
import Mobiles from './Mobiles';
import Laptops from './Laptops';
import { Carousel } from 'react-bootstrap';
import Fashion from './Fashion';
import ScrollImage from './ScrollImage';

const Home = () => {
    return (
        <div className='home '  >
            <Carousel interval={1000} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/hero11.webp"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/hero22.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/hero33.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/hero44.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/hero55.webp"
                        alt="Second slide"
                    />

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/hero66.webp"
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/hero77.webp"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel.Item>

            </Carousel>
            <br />
            <div className="card text-black bg-dark border-0 ">
                <img src="/assets/mybackground.jpg" className="card-img" height="500px" alt="..." style={{marginTop:"-25px"}}/>
                <div className="card-img-overlay d-flex flex-column justify-content-center ">
                    <div className="container">
                        <h5 className="card-title display-4 fw-bolder mb-0 a" >NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">
                            CHECKOUT THE ALL NEW PRODUCTS
                        </p>

                    </div>
                </div>
                <div>
                </div>

            </div>
            
            <Products />
            <Fashion/>
            <Mobiles/>
            <Laptops/>
            <MultipleProducts/>
            <ScrollImage/>
            <AboutUs />
            
        </div>
    )
}

export default Home;
