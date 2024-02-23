import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fashionbig from './fashionbig.jpg';
import fashion1 from './fashion1.jpg';
import fashion2 from './fashion2.jpg';

const Fashion = () => {
    const fashionStyle = {
        width: '100%',
        margin: '10px',
        border: '1px solid black',
    };
    return (
        <div className="container mt-5">
             <h1 className='display-6 fw-bolder text-center' style={{backgroundColor:"lightgrey"}}>Fashion</h1><hr />
            <Row className="justify-content-center align-items-center bg-light" style={fashionStyle} id='fashion'>
                <Col md={5} className="text-center" style={{ marginRight: '10px', marginBottom: '10px' }}>
                    <a href="#"><img src={fashionbig} alt="Your Image" className="img-fluid" /></a>
                </Col>

                <Col md={5}>
                    <Row>
                        <Col>
                            <a href="#"><img src={fashion1} alt="Your Image" className="img-fluid" /></a>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: "18%" }}>
                        <Col>
                            <a href="/information"><img src={fashion2} alt="Your Image" className="img-fluid" /></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Fashion
