import {DELETE, GET,ADD, EDIT} from "./actionType"

const init={
    users:[]
};

export const userReducer=(state=init,{type,payload})=>{
    switch (type) {
        case GET:
            return{
                ...state,users: payload,
            };
            case DELETE:
                return{
                    ...state,users:state.users.filter(el=>el._id!==payload)
                };
        case ADD:
            return{
             ...state,users:[...state.users,payload]
            } ;
            case EDIT:
                return{
                    ...state,users:state.users.map(el=>el._id===payload._id?payload:el)
                }       
            
            
    
        default:
            return state;
    }
};