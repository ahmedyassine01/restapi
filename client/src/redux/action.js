import axios from "axios";
import {GET,DELETE,ADD, EDIT }    from "./actionType";

export const getUsers=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/get");
        dispatch({
            type:GET,
            payload:res.data,
        })
    } catch (error) {
        console.log(error.response.data)
        
    }
};
export const handleDelete=(_id)=>async(dispatch)=>{
    try {
        const res=await axios.delete(`/user/delete/${_id}`);
        dispatch({
            type:DELETE,
            payload:res.data,
        }
       
        )
    } catch (error) {
        console.log(error.response.data)
    }
    
};
export const handleAdd=(newUser)=>async(dispatch)=>{
    try {
        const res=await axios.post("/add",newUser);
        dispatch({
            type:ADD,
            payload:res.data
        })
    } catch (error) {
      console.log(error.response.data)  
    }
};

export const handleEDIT=(editedUser)=>async(dispatch)=>{
    try {
        const res=await axios.put(`/user/edit/${editedUser._id}`,editedUser);
        dispatch(
            {
                type:EDIT,
                payload:res.data,
            }
        )
    } catch (error) {
        console.log(error.response.data)  

    }
}