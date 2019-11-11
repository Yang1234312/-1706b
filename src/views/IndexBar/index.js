import  React from "react"
import {BrowserRouter,Switch,Route,Link,Redirect} from "react-router-dom"
import "./index.css"
import Home from "../../component/HomeBar/index.js"
import Plan from "../../component/PlanBar/index.js"
import Travel from "../../component/TravelBar/index.js"
import Destination from "../../component/DestinationBar/index.js"

class Index extends React.Component{
    constructor(props){
        super(props)
    }
    state={
        TabList:[
            {
                title:'首页',
                plan:'/index/home'
            },
            {
                title:'目的地',
                plan:'/index/Destination'
            },{
                title:'去旅行',
                plan:"/index/travel"
            },{
                title:"机票",
                plan:"/index/plan"
            }
        ]

    }
    render(){
        console.log(this.props, '33prop');
        const {child}=this.props
        console.log(child)
        const {TabList}=this.state
        return <div>
            {
                
            child.map((item,index)=>{
                    return <Link  className="every-title" to={item.path} key={index}>{item.title}</Link>
                })

            }
            <Route path="/index/home" component={Home} exact />
            <Route path="/index/Destination" component={Destination} />
            <Route path="/index/travel" component={Travel} />
            <Route path="/index/plan" component={Plan} />
             </div>
    }
}
export default Index