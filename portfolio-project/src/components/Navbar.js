import React from "react"
import {Link ,withRouter,Route} from "react-router-dom"
import Registration from "./Registration"
import Login from "./Login"
import Home from "./Home"
import Logout from "./Logout"
import Account from "./Account"
import {useSelector} from "react-redux"

const Navbar=(props)=>{
    
    const {loggedin,handleLogin}=props
    const admin=useSelector((state)=>{
        return state.admin
    })
    //b console.log(admin)


    return<div class="container-md">
        <div class="row justify-conntent-center">
            <div class="col align text-center">
            {
            (loggedin)?<div class="p-3 mb-2 bg-dark text-white" style={{height:"45px"}}><Link to="/account">Account</Link>|<Link to="/logout">Logout</Link></div>:
                       <div class="p-3 mb-2 bg-dark text-white" style={{height:"45px"}}><Link to="/login">Login</Link>|<Link to="/register">Register</Link></div>
            }
            </div>
            </div>

            <div class="row jutift-content-between">
            <div class="col-3">
                    {
                     (loggedin)&&<div>
                         <Link style={{textDecoration:"none"}} to="/courses"><h5 style={{color:"white",backgroundColor:"#D9B08C" ,textDecoration:"none"}}>My Courses</h5></Link>
                         <Link style={{textDecoration:"none"}} to="/notification"><h5 style={{color:"white",backgroundColor:"#D9B08C"}}>Notifications</h5></Link>
                         {
                             (admin.role=="admin")&&(
                                 <div>
                                <Link style={{textDecoration:"none"}} to="/addcourses"><h5 style={{color:"white",backgroundColor:"#D9B08C"}}>Add courses</h5></Link>
                                <Link style={{textDecoration:"none"}} to="/addstudent"><h5 style={{color:"white",backgroundColor:"#D9B08C"}}>Add student</h5></Link>
                                 </div>
                             )

                    }
                        </div>
                    }
             </div>      
             <div class="col justify-content-center"style={{height:"450px"}}>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/register" component={Registration}/>
            <Route path="/login" render={(props)=>{
               return <Login {...props} handleLogin={handleLogin}/>
            }}/>
            <Route path="/logout" render={(props)=>{
               return <Logout {...props} handleLogin={handleLogin}/>
            }}/>
            <Route path="/account" component={Account} />
            </div>
        </div>
        
           
      </div>

}
export default withRouter(Navbar)