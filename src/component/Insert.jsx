import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Insert() {
  const [EnterName, setName] = useState('');
  const [Email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://643d75e46afd66da6af78d3b.mockapi.io/crud', {
      e_name: EnterName,
      e_email: Email
    }).then(() => {
      navigate('/');
    }).catch((err)=>{
      console.log(err);
    });
  }
  return (
    <>
      <div className='row'>
      <div className='mb-2 mt-2'>
         <Link to= '/'>
         <button className='btn btn-primary'>Display Data</button>
         </Link>
          </div>
        <div className='col-md-4 '>
          <div className='bg-primary p-4 text-center'>
            <h1 >Insert Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label >Employee Name :</label>
              <input type="text" placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label >Employee Email:</label>
              <input type="text" name="Email" placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br />
            <input type="submit" value="submit" className='btn btn-primary' />
          </form>
        </div>
        
      </div>
    </>
  )
}
