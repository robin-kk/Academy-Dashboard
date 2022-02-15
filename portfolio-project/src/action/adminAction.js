import axios from "axios"

export const ADMINS="ADMINS"

export const createdAdmin=()=>{

    return(dispatch)=>{
        axios.get("https://dct-e-learning.herokuapp.com/api/admin/account",{headers:{
            "Authorization":localStorage.getItem("token")
        }})

        .then((res)=>{
          let result=res.data
          if(result.hasOwnProperty("errors")){
              alert(result.errors)
          }else{
          dispatch(adminObject(result))
          }
        })
         .catch((err)=>{
             alert(err.message)
         })
    }

}
     const adminObject=(data)=>{
        return{type:ADMINS,payload:data}
     }