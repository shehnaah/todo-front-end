import { BASE_URL } from './BaseURL'
import { CommonAPI } from './CommonAPI'

// // uploading video
// export const uploadVideo = async (video) => {
//     // http post req to http://localhost:4000/video for adding video in json server and retun repose to Add component
//     return await commonAPI("POST", `${BASE_URL}/videos`, video)
// }

// add task
export const addTask = async (task)=>{
    return await CommonAPI("POST",`${BASE_URL}/task`, task)
}
// get all videos from json server
export const getAlltask = async () => {
    // http get req to http://localhost:4000/task for display video in json server and retun repose to view component
    return await CommonAPI("GET", `${BASE_URL}/task`, "")
}

export const getAtask = async (id) => {
    // http get req to http://localhost:4000/video for display an single video in json server and retun repose to video card component
    return await CommonAPI("GET", `${BASE_URL}/task/${id}`, "")
}

export const deleteTask = async (id) => {
    // http get req to http://localhost:4000/video for display an single video in json server and retun repose to video card component
    return await CommonAPI("DELETE", `${BASE_URL}/task/${id}`, "")
}


// add category
export const addPending = async (body) => {
    // http post req to http://localhost:4000/category for adding video in json server and return reponse to category component
    return await CommonAPI("POST", `${BASE_URL}/pending`, body)
}


export const updatePending = async (id,updatedPending)=>{
    // http put req to http://localhost:4000/category/id for updating existing category from json server and return reponse to category component
    return await CommonAPI("PUT",`${BASE_URL}/pending/${id}`,updatedPending)
}

export const getAllPending = async () => {
    // http get req to http://localhost:4000/video for display an single video in json server and retun repose to video card component
    return await CommonAPI("GET", `${BASE_URL}/pending`, "")
}
