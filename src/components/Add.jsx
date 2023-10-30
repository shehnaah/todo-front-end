import React, { useState } from 'react'
import { Modal,Form,Button } from 'react-bootstrap'
import { addTask } from '../services/AllAPI';




function Add() {

  const [task,setTask]=useState({
    id:"",taskName:"",description:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async ()=>{
   const response = await addTask(task);
   console.log(response);
   handleClose()
  }


  return (
    <div>
    <button className='btn d-flex flex-row-reverse' onClick={handleShow}><i class="fa-solid fa-circle-plus fa-2xl text-success" ></i></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add New task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form className='border p-3 rounded border-secondary'>

         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Task Id" onChange={(e)=>setTask({...task,id:e.target.value})} />
      </Form.Group>


         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Task name" onChange={(e)=>setTask({...task,taskName:e.target.value})} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Task Description" onChange={(e)=>setTask({...task,description:e.target.value})}/>
      </Form.Group>

      

         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Add
