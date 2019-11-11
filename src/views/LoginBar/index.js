import  React from "react"
import {BrowserRouter,Switch,Route,Link,Redirect} from "react-router-dom"
import "./index.css"
import  RequestPort from "../../until/request.js"




class Login extends React.Component{
    constructor(props){
        super(props)
    }
    state={
       username:'',
       password:''

    }
    setChange=()=>{
        const {username,password}=this.state
     if(username===""&&password===""){
         alert("账号或密码不能为空")
     }else{
        RequestPort('/login/json',{username,password}).then(res=>{
            console.log(res)
            if(res==='登陆成功'){
                this.props.history.push('/index')

            }
            else if(res==='没有注册此账号'){
                alert("账号或密码错误")

            }

        })
     }

    }
    cetData(){
        this.props.history.push('/register')

    }
       

    
    render(){
        const {username,password}=this.state
       
        return <div className="login-title">
           账号:<input placeholder="请输入账号" value={username} onChange={(e)=>{
               this.setState({
                   username:e.target.value
               })

           }}  value={username} /> <br/>
           密码:<input  placeholder="请输入密码" value={password} onChange={(e)=>{
               this.setState({
                   password:e.target.value
               })

           }}  value={password}/><br/>
           <button onClick={()=>{
               this.setChange()

           }}>登陆</button>
           <button onClick={()=>{
               this.cetData()

           }}>注册</button>
         
             </div>
    }
}
export default Login