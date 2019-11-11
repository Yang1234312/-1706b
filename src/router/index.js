import React from "react"
import  {BrowserRouter,Switch,Link,Redirect,Route} from "react-router-dom"
import Index from "../views/IndexBar/index.js"
import Login from "../views/LoginBar/index.js"
import Register from "../views/registerBar/index.js"
import RouterConfig from "./router.config.js"
import RouterView from "../router/router.view.js"
import "./index.css"

class Router extends React.Component{
    constructor(props){
        super(props)
    }
    state={

    }
    render(){
        return <div>
            <BrowserRouter> 
            <Link to="/login" className="login">登陆</Link>
            <Route path="/index" component={Index
            }/>
             
            </BrowserRouter>

        </div>
    }
}
export default Router