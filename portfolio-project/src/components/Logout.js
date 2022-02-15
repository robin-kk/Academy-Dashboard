import React from "react"


    const Logout = (props) => {
    const { handleLogin } = props
    setTimeout(() => {
        localStorage.removeItem("token")
        props.history.push("/")
        handleLogin()
    }, 5000)

    return <div style={{ width: "500px" }}>
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Logged out!</h4>
            <p>You are succeffully logged out from the database,Redirecting to the login page</p>
            <hr />
            <p class="mb-0">Kindly wait for few seconds</p>
        </div>
    </div>
}
export default Logout 