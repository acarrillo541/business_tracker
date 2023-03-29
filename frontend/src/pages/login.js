import {
    MDBBtn,
    MDBCheckbox,
    MDBCol,
    MDBInput,
    MDBRow,
  } from 'mdb-react-ui-kit';
import { Outlet } from 'react-router-dom';


import logo from "./../gopher.png";

export default function Login(){
    return (
    <>
        <div className='d-flex vh-100 align-items-center justify-content-center text-center bg-dark'>
        <MDBCol className='rounded-9 bg-light p-4 d-flex' size='6'>
            <MDBCol size='5' className="p-4 d-flex justify-content-center align-items-center">
                <img  src={logo} alt="logo" style={{width:'90%'}}/>
            </MDBCol>
            <MDBCol size="1"/>
            <MDBCol center size='5' className='rounded-9 p-4 ' >
            <h4 className='fw-bold'>Member Login</h4>
            <form className=''>
                <MDBInput className='mb-2 mt-4' type='email'  label='Email address'/>
                <MDBInput className='mb-4' type='password' label='Password'/>
                <MDBBtn type='submit' className='mb-4 rounded-9' block>Login</MDBBtn>
            </form>
            <MDBRow className='mb-5'>
                <MDBCol className='d-flex justify-content-center'>
                <MDBCheckbox defaultChecked label="Remember Me"/>
                </MDBCol>
                <MDBCol className='d-flex justify-content-center'>
                <a href='#!'>Forgot Password?</a>
                </MDBCol>
            </MDBRow>
            <a href='#!'>Create Account</a>
            </MDBCol>
        </MDBCol>
        </div>
    </>
    );
}
