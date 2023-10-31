import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Register() {
  const [user ,setUser ] = useState({
    name :"",
    email :"",
    password :"",
    repeatpassword :"",
  })
  const changehhandle = e =>{
    const {name , value} = e.target
    setUser({
      ...user ,
      [name] : value
    })
  }
  return (
    <MDBContainer fluid className='d-flex align-items-center items-center justify-content-center bg-image w-auto' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3 items-center w-auto ml-96'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5 ml-96">Create an account</h2>
          <MDBInput wrapperClass='mb-4 ml-96' label='Your Name' size='lg' value={user.name} id='form1' type='text' onChange={ changehhandle}/>
          <MDBInput wrapperClass='mb-4 ml-96' label='Your Email' size='lg' value={user.email} id='form2' type='email'onChange={ changehhandle}/>
          <MDBInput wrapperClass='mb-4 ml-96' label='Password' size='lg' value={user.password} id='form3' type='password'onChange={ changehhandle}/>
          <MDBInput wrapperClass='mb-4 ml-96' label='Repeat your password' size='lg' value={user.repeatpassword} id='form4' type='password'onChange={ changehhandle}/>
          <MDBBtn className='mb-4 ml-96 w-100 bg-transparent border-r-8 border-blue-950 text-red-950 border-solid font-semibold mt-3 py-1 px-8 hover:bg-red-800 
      duration-300 rounded-2xl gradient-custom-4' size='lg'>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;