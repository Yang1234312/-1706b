import Home from "../views/IndexBar/index.js"
import Login from "../views/LoginBar/index.js"
import First from "../component/HomeBar/index.js"
import Travel from "../component/TravelBar/index.js"
import Plan from "../component/PlanBar/index.js"
import Destination from "../component/DestinationBar/index.js"

let RouterConfig=[
    {   type:'route',
        path:"/index",
        component:Home,
        children:[
            {
                type:"route",
                path:"/index/home",
                title:'首页',
                component:First
            }, {
                type:"route",
                path:"/index/travel",
                component:Travel,
                title:'目的地',

            }, {
                type:"route",
                path:"/index/plan",
                component:Plan,
                title:'去旅行'
            }, {
                type:"route",
                path:'/index/Destination',
                component:Destination,
                title:'机票',
            },

        ]
    },{type:'route',
        path:"/login",
        component:Login
    },{type:'redirect',
        from:"/",
        to:"/index"
    }
]
export default RouterConfig