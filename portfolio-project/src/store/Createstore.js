import {createStore,combineReducers} from "redux"
import adminReducer from "../reducer/adminReducer"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"

const CreateStore=()=>{
    const store=createStore(combineReducers({
    admin:adminReducer
    }),applyMiddleware(thunk))
    return store
}
export default CreateStore