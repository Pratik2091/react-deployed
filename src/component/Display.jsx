import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Display() {

  const [apiData, setApiData] = useState([])

  function getData() {
    axios.get('https://643d75e46afd66da6af78d3b.mockapi.io/crud')
      .then((response) => {
        setApiData(response.data);
      }).catch((err)=>{
        console.log(err);
      })
  }
  function setDataToStorage(id,name,email) {
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);

    
  }
  function handleDelete(id) {
     axios.delete(`https://643d75e46afd66da6af78d3b.mockapi.io/crud/${id}`)
    .then(()=>{
      getData();
    }).catch((err)=>{
      console.log(err);
    });
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <div className='mb-2 mg-2'>
         <Link to= '/Insert'>
         <button className='btn btn-primary'>Insert New Data</button>
         </Link>
          </div>
          <table className='table table-bordered table-striped table-dark table-hover'>
            <thead>
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {
                apiData.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_email}</td>
                        <td>
                          <Link to='/edit'>
                          <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id,item.e_name,item.e_email)}>EDIT</button>
                          </Link>
                        </td>
                        <td>
                          <button className='btn btn-danger' onClick={()=> {if (window.confirm('Are shure to Delete Data')) {handleDelete(item.id)}}}>DELETE</button>
                        </td>
                      </tr>
                    </>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Display
