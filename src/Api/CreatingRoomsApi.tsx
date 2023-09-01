import axios from "axios"

const url:string = "http://localhost:2659/api/v1"

export const createRooms =async(data: any, userID: any)=>{
    try {
   const config:any = {
        "content-type": "multipart/formdata"
    }
    return await axios.post(`${url}/${userID}/createRoom`, config,data).then((res:any)=>{
        return res.data.data
    })
    } catch (error) {
        console.log(error)
    }
}

export const viewAllCreateRooms =async()=>{
    try {
       return await axios.get(`${url}/viewRooms`).then((res:any)=>{
       return res.data.data
       })
     
        } catch (error) {
            console.log(error)
        }
}
export const viewOneCreateRooms =async(roomID:any)=>{
    try {
        return await axios.get(`${url}/${roomID}/viewRoom`).then((res:any)=>{
            return res.data.data      
        })
        } catch (error) {
            console.log(error)
        }
}

export const viewUserRoom = async(userID: any)=>{
    try {
        return await axios.get(`${url}/viewUserRoom`,userID).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
   
}