import React, { useEffect, useState } from 'react'
import { Col,Row,Button } from 'react-bootstrap'
import { addPending, getAllPending, getAlltask, getAtask, updatePending } from '../services/AllAPI'
import { toast } from 'react-toastify'


function Status() {
  const [pending,setPending] = useState([])
  const [completed,setCompleted] = useState([])
  const dragOverCategory = (e)=>{
    console.log("Dragging over  category");
    e.preventDefault()
  }
//   const insertpending = async (e,id)=>{
//     if(pending){
//       let body = {
//         pending,alltask:[]
//       }
// const response =await addPending(body)
// if(response.status>=200 && response.status<300){
//     // reset state
//     setPending("")
//   getAllPending()

// }
// else{
//   toast.warning("Uploading error!!! please try after sometime...")
// }
//     }
//   }

  const getPendingTasks = async()=>{
    const {data} = await getAllPending()
    setPending(data)
    console.log(data);
  }

  const taskDrop = async (e,taskId)=>{
    console.log("Inside drop function");
    console.log("task id" +taskId );
    const tasksId = e.dataTransfer.getData("taskId")
    console.log("video card id " +tasksId );


    // get video details
    const {data} = await getAtask(tasksId)
    let selectedTask = pending.find(item=>item.id===taskId)
    console.log(typeof(selectedTask));
    selectedTask.alltask.push(data)
    console.log(selectedTask);
    await updatePending(taskId,selectedTask)
    getAlltask()

  }
useEffect(()=>{
  getPendingTasks()
},[])

  return (
    <div>
     <div className='container p-5 rounded' >
    
<Row>
<Col>
  <h3>Pending</h3>
  { 

pending.length>0?pending.map((item)=>(
      <table className="table mt-4" droppable onDragOver={(e)=>dragOverCategory(e)}
      onDrop={(e)=>taskDrop(e,item?.id)}>
                    <thead>
                    </thead>
                    <tbody>
    <tr className='mb-2' >
      <td> </td>
      
      <td>{item?.taskName} </td>
      <td>
      </td>
      <td> </td>       
  <div className='d-flex justify-content-evenly'>
     <Button className='btn btn-light'> 
                            
      <i class="fa-solid fa-trash  fa-2x  me-1 text-danger"></i>
  </Button>

  </div>      
  
     
    </tr>
                          
       </tbody>
                    </table>
      )):
      <p className='text-danger'>No pending tasks!!!</p>
      }   
  </Col>
      <Col>
               <h3>Completed</h3>
                  <table className="table mt-4">
                        <thead>
                        </thead>
                        <tbody>
                    <div className="row">
                      <ol className="list-group ">
                          <li className="list-group-item d-flex justify-content-between align-items-start todo mb-1">
                       <div className="ms-2 me-auto">
                      <div className="fw-bold">
                     </div>
                    </div>
                    <a>
                  <button className="btn"><i className='fa-solid fa-trash text-danger'></i></button>
                 </a></li>
                </ol>
           </div>                
     </tbody>
    </table>
     </Col>
</Row>    
</div>
    </div>
  )
  }

export default Status;
