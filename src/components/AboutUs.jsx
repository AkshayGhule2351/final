import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
    const imageStyle = {
        width: '200px',
        height: '200px',
    };
    const imageStyle1 = {
        width: '500px',
        height: '500px',
    };

    return (
        <div className="container mt-5">
            <h1 className='display-6 fw-bolder text-center' style={{backgroundColor:"lightgrey"}}>About Us</h1><hr />
            <div className="row">
                <div className="col-md-6" >
                    <img
                        src="/image/belif.jpg"
                        alt="Company Logo"
                        className="img-fluid rounded"
                        style={imageStyle1}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4">About Our Company</h2>
                    <p>

                        A marketing company is a dynamic entity specializing in crafting and executing strategic plans to promote and elevate brands. Through a mix of creative campaigns, data-driven insights, and digital prowess, these companies aim to boost client visibility, engage target audiences, and achieve measurable results.
                    </p>


                    <h2 >Mission and Vision</h2>
                    <ul>
                        <li>
                            <h5>Mission:-</h5>
                            <p>
                                The mission of a marketing company is to strategically promote and enhance the visibility of client products or services, driving brand awareness, customer engagement, and ultimately, business growth.
                            </p>

                        </li>

                        <li>
                            <h5>Vision:-</h5>
                            <p>
                                Aspire to redefine industry standards, foster client success, and be recognized as a trusted partner in driving innovation, while maintaining a commitment to excellence and sustainability.
                            </p>
                        </li>
                    </ul>


                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-12">
                    <center> <h3 className='underline'>Our Team</h3></center> <br />
                </div>
                <div className="col-md-3">
                    <img
                        src="/image/johan.jpg"
                        alt="Team Member 1"
                        className="img-fluid rounded-circle"
                        style={imageStyle}
                    />
                    <div style={{ marginLeft: 40 }}>
                        <h5 className="mt-3" >John Doe</h5>
                        <p>CEO</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <img
                        src="/image/jane.jpg"
                        alt="Team Member 2"
                        className="img-fluid rounded-circle"
                        style={imageStyle}
                    />
                    <div style={{ marginLeft: 40 }}>
                        <h5 className="mt-3" >Jane Smith</h5>
                        <p>Manager</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <img
                        src="/image/julliya.jpg"
                        alt="Team Member 3"
                        className="img-fluid rounded-circle"
                        style={imageStyle}
                    />
                    <div style={{ marginLeft: 40 }}>
                        <h5 className="mt-3" >Julliya Yani</h5>
                        <p>Director </p>
                    </div>

                </div>

                <div className="col-md-3">
                    <img
                        src="/image/janifer.jpg"
                        alt="Team Member 3"
                        className="img-fluid rounded-circle"
                        style={imageStyle}
                    />
                    <div style={{ marginLeft: 40 }}>
                        <h5 className="mt-3" >Jenifer Loye</h5>
                        <p>Marketing specialist</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;
