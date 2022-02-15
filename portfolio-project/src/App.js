import React,{useState,useEffect} from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"


const App=()=>{
  useEffect(()=>{
    if(localStorage.getItem("token")){
      handleLogin()
    }
  },[])

  const[loggedin,setLoggedIn]=useState(false)

  const handleLogin=()=>{
     setLoggedIn(!loggedin)
  }

  return<div style={{backgroundColor:"#116466"}}>
          <Navbar loggedin={loggedin} handleLogin={handleLogin}/>
        </div>
}
export default App