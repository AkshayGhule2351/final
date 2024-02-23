import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
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
            <div className='login-template p-5 rounded bg-white'>
                <form>
                    <center><h3>Sign in</h3></center>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:-</label>
                        <input type="email" placeholder='Enter Email here..' className='form-control' required />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password:-</label>
                        <input type="password" placeholder='Enter Password here..' className='form-control' required />
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-control custom-checkbox ' id="check" required />
                        <label htmlFor='check' className='custom-input-label ms-2 '>Remember me</label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>SignIn</button>
                    </div>
                    <p className='text-end mt-2'>
                        <Link to="#" className='ms-2 '>Forgot Password</Link> OR <Link to="/register" className='ms-2 '>SignUp</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
