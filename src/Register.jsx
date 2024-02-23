import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const backgroundStyle = {
        backgroundColor: `lightblue`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={backgroundStyle}>
            <div className='register-template p-5 rounded bg-white  '>
                <form>
                    <center><h3>Register</h3></center>
                    <div className='mb-2'>
                        <label htmlFor='fullName'>Full Name:</label>
                        <input type="text" placeholder='Enter your full name' className='form-control' required />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" placeholder='Enter Email here..' className='form-control' required />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password:</label>
                        <input type="password" placeholder='Enter Password here..' className='form-control' required />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='confirmPassword'>Confirm Password:</label>
                        <input type="password" placeholder='Confirm Password' className='form-control' required />
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Sign Up</button>
                    </div>
                    <p className='text-end mt-2'>
                        Already have an account? <Link to="/login" className='ms-2 '>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
