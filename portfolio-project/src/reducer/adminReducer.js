import { ADMINS } from "../action/adminAction"
const initialstatevalue={}
 const adminReducer=(state=initialstatevalue,action)=>{

    switch(action.type){
      
       case ADMINS:{
         return{...state,...action.payload}
       }

        default:{
          return {...state}
        }
    }
 }
 export default adminReducer