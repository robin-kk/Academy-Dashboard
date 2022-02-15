 import axios from "axios"
import React,{useState} from "react"
 import {Button,Form} from "react-bootstrap"
 import validator from "validator"

 const Login=(props)=>{
    const {handleLogin}=props
    const error={}
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[formerr,setFormerr]=useState('')
    const[Alert,setAlert]=useState(false)

    const validation=()=>{
      if(validator.isEmail(email)){
         setEmail(email)
     }else{
         error.email="invalid Email"
     }

     if(password.trim().length===0){
         error.password="Provide a password"
     }

    }


    const handleEmail=(e)=>{
      setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
       setPassword(e.target.value)
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      validation()
      if(Object.keys(error).length===0){
         const formdata={
            email:email,
            password:password
         }
         axios.post("https://dct-e-learning.herokuapp.com/api/admin/login",formdata)
         .then((res)=>{
            const result=res.data
            if(result.hasOwnProperty("errors")){
               alert(result.errors)
            }else{
            localStorage.setItem("token", result.token)
            setAlert(true)
   
            setTimeout(()=>{
               props.history.push("/")
               handleLogin()
           },3000)
         }
      })
   

            .catch((err)=>{
            alert(err.message)
         })
      }
         else{
         setFormerr(error)
      }
   }

    return<div style={{width:"500px"}}class="text-center">
       {
      (Alert)&&<div class="alert alert-success" role="alert">
               User Logined successfully !
             </div>
       }
       <h2><span class="text-center" style={{backgroundColor:"#D9B08C",borderRadius:"8px"}}>Login with us</span></h2>
       <Form onSubmit={handleSubmit}>
       
       <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="enter your email" value={email} onChange={handleEmail}/>
            {
                (formerr.email)?<Form.Text style={{color:"red"}}>{formerr.email}</Form.Text>:
                <Form.Text style={{color:"green"}}> we will never share this email with anyone
                </Form.Text>
            }
            
        </Form.Group>
        <Form.Group controlId="formpassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter your password" value={password} onChange={handlePassword}/>
            {
              (formerr.password)&&<Form.Text style={{color:"red"}}>{formerr.password}</Form.Text>
            }
        </Form.Group><br/>
        <Button variant="primary" type="submit">
            login
           </Button>

       </Form>
    </div>
 }
 export default Login