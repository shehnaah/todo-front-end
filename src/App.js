import { useState } from 'react';
import './App.css';
import List from './components/List';
import Status from './components/Status';
import { Row } from 'react-bootstrap';
import { Routes,Route } from 'react-router-dom';


function App() {
  const [addTaskServerResponse,setaddTaskServerResponse]=useState({})

  return (
    <>
      <div className="App text-center mt-5">
        <h1 className='text-warning'>To Do List</h1>
        <p className='fw-bolder text-warning'>"Plan your day, plan your tasks, plan your success."</p>
      </div>
<Row className='mt-5'>
   <div className="col-lg-3"></div>
   <div className="col-lg-6">
<Routes>
  
     <Route path='/' element={<List addTaskServerResponse={addTaskServerResponse} setaddTaskServerResponse={setaddTaskServerResponse}/>}  />
  
</Routes>   </div>
   <div className="col-lg-3"></div>
  
</Row>   
 </>
  );
}

export default App;
