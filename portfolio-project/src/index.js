import App from "./App"
import CreateStore from "./store/Createstore"
import reactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

const store=CreateStore()
console.log(store)

reactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById("root"))