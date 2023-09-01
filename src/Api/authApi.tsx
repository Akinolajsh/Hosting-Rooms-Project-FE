import axios from "axios"

const URL : string = "https://airbnb-zp0v.onrender.com/api/v1"

export const createAuth = async(data : any,
    //  userID : string
     )=>{
    try {

        const config : any = {
            "content-type" : "multipart/formdata"
        }

        return await axios.post(`${URL}/registerUser`, data, config).then((res : any)=>{
            return res.data.data
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const signIN = async (data : any)=>{
    try {

        return await axios.post(`${URL}/siginIn`, data).then((res : any)=>{
            return res.data.data
        })
        
    } catch (error) {
        console.log(error);
        
    }
}