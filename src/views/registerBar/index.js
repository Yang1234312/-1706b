import React from "react"
import {Route,Switch,Redirect,Link} from "react-router-dom"
import Reques from "../../until/request.js"

class Register extends React.Component{
    constructor(props){
        super(props)


    }
    state={
        registeruser:'',
        registerpass:'',

    }
    toRegister=()=>{
        const {registeruser,registerpass}=this.state
        Reques('/reggister/json',{
           registeruser,registerpass
        }).then(res=>{
           
        })
    }
    render(){
        const {registeruser,registerpass}=this.state
        return <div className="register">
            账号:<input  value={registeruser}  onChange={(e)=>{
                this.setState({
                    registeruser:e.target.value
                })
            }}  placeholder="请输入你要注册的用户名"/> <br/>
            密码:<input  value={registerpass}  onChange={(e)=>{
                this.setState({
                    registerpass:e.target.value
                })
            }}placeholder="请输入你要注册的密码"/> <br/>
            <button onClick={()=>{
                this.toRegister()

                
            }}>进行注册</button>

        </div>
    }

}
export default  Register