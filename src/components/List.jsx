import React, { useEffect, useState } from 'react'
import './List.css'
import Add from './Add';
import { deleteTask, getAlltask } from '../services/AllAPI';

function List({addTaskServerResponse,setaddTaskServerResponse}) {
  const [allTask,setAllTask] = useState([])
  const getAllAddedTask=async()=>{
    const{data}=await getAlltask()
    setAllTask(data)
    console.log(data);
  } 
  useEffect(()=>{
    getAllAddedTask()
  },[])

  const removeTask = async (id)=>{
    const response = await deleteTask(id);
    console.log(response);
  }
  const dragStarted = (e,id)=>{
    console.log("Drag started...");
    e.dataTransfer.setData("taskid",id)
    console.log(id);
  }

    return (
        <div>

<div className='container p-5 rounded' >
<div className='d-flex flex-row-reverse'>
        <Add setaddTaskServerResponse={setaddTaskServerResponse} />
    
</div> 
               <table className="table mt-4">
                    <thead>
                    </thead>
                    <tbody>
{                         allTask.length>0?allTask?.map((task)=>(
                            <div className="row">
                                <ol className="list-group ">
                                    <li className="list-group-item d-flex justify-content-between align-items-start todo mb-1" draggable onDragStart={(e)=>dragStarted(e,allTask.id)}>
                                    
                                        <div className="ms-2 me-auto">
                                            {task.taskName}
                                            <div className="fw-bold">
                                            </div>
    
                                        </div>
                                        <a>
                                            <button onClick={e=>removeTask(task.id)} className="btn"><i className='fa-solid fa-trash text-danger'></i></button>
                                        </a>                          </li>
                                </ol>
                            </div>
                        
)):
<p>Nothing to display</p>
}   
                
 </tbody>
                </table>
    
</div>
        </div>
    )
}

export default List
