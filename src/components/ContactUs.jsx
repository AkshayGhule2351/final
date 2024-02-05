import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';


const ContactUs = () => {
    return (
        <div>
            
            <div className="container mt-5" style={{backgroundColor:"lightcyan"}} >
            <h1 className='display-6 fw-bolder text-center 'style={{backgroundColor:"lightgrey"}} >Contact Us</h1>
                <hr />
                <p>
                    If you have any questions or concerns, please feel free to contact us using the
                    information below.
                </p>

                <div className="row">
                    <div className="col-md-4">
                        <h4>Address</h4>
                        <p>
                            123 Main Street
                            <br />
                            Pune, Maharastra 111045
                            <br />
                            India
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Email</h4>
                        <p>
                            <a href="#">abg@example.com</a>
                        </p>
                        <h4>Phone</h4>
                        <p>
                            <a href="tel:+123456789">+91 (234) 567-89</a>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <ul className="list-inline">
                            <a href="#" style={{ fontSize: "25px" }} ><FontAwesomeIcon icon={faFacebook} /></a><br />
                            <a href="#" style={{ fontSize: "25px" }}  ><FontAwesomeIcon icon={faInstagram} /></a><br />
                            <a href="#" style={{ fontSize: "25px" }} ><FontAwesomeIcon icon={faWhatsapp} /></a><br />
                            <a href="#" style={{ fontSize: "25px" }} ><FontAwesomeIcon icon={faTwitter} /></a><br />

                        </ul>
                    </div>

                </div>



                {/* Contact Form */}
                <h4>For More Information Fill the Given Form:-</h4>
               <div >
               
                <form className="mt-4">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message:</label>
                        <textarea className="form-control" id="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               </div>


                <div className="mt-4">
                    <h4>Webpage</h4>
                    <p>
                        Visit our <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">website</a> for more information.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;
