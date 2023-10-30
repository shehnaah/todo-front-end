import axios from'axios'
 
export const CommonAPI = async (method,url,data)=>{
let reqConfig={
    method,url,data,Headers:{
        "Content-Type":"application/json"
    }
}
return await axios(reqConfig).then(
    (result)=>{
    return result
}).catch((err)=>{
    return err
})
}