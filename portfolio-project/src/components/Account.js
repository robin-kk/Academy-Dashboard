import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createdAdmin } from "../action/adminAction"

const Account = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(createdAdmin())
    }, [])

    const admin = useSelector((state) => {
        return state.admin
    })
    console.log(admin)

    return <div>
        <h3 class="justify-content-start">Welcome,{admin.username}</h3>
    </div>

}
export default Account