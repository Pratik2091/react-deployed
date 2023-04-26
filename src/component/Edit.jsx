import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Edit() {

  const [id,setId]=useState(0);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setId( localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
    
  }, [])
  const handleupdate=(e)=> {
    e.preventDefault();
    axios.put(`https://643d75e46afd66da6af78d3b.mockapi.io/crud/${id}`,{
      e_name:name,
      e_email: email
    }).then(()=>{
      navigate('/');
    }).catch((err)=>{
      console.log(err);
    })
  }
  

  return (
    <>
    <div className='row'>
    <div className='mb-2 mt-2'>
       <Link to='/'>
       <button className='btn btn-primary'>Display Data</button>
       </Link>
        </div>
      <div className='col-md-4 '>
        <div className='bg-primary p-4 text-center'>
          <h1 >Update Data</h1>
        </div>
        <form onSubmit={handleupdate} >
          <div>
            <label >Employee Name :</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' className='form-control' />
          </div>
          <div>
            <label >Employee Email:</label>
            <input type="text" name="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' className='form-control'/>
          </div>
          <br />
          <input type="submit" value="Update" className='btn btn-primary' />
        </form>
      </div>
      
    </div>
  </>
  )
}
