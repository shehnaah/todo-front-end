import React from 'react'
import { Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';


function Home() {
    const [addTaskServerResponse,setaddTaskServerResponse]=useState({})

    return (
      <>
        <div className="App text-center mt-5">
          <h1 className='text-success'>To Do List</h1>
          <p className='fw-bolder'>Plan your day, plan your tasks, plan your success.</p>
        </div>
  <Row className='mt-5'>
     <div className="col-lg-1"></div>
     <div className="col-lg-5">
  <Routes>
    
       <Route path='/' element={<List addTaskServerResponse={addTaskServerResponse} setaddTaskServerResponse={setaddTaskServerResponse}/>}  />
    
  </Routes>   </div>
     <div className="col-lg-5">
  <Routes>
        <Route path='/' element={<Status/>}/>
    
  </Routes>  
   </div>
     <div className="col-lg-1"></div>
    
  </Row>   
   </>
    );
  }
  

export default Home
