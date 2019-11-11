import React,{Component} from "react"
import {Switch,Link,Route,Redirect} from "react-router-dom"


class  RouterView extends  Component{
    render(){
        return                 <Switch>
            {
                    this.props.router.map((item,index)=>{
                        if(item.type==='route'){
                                    return <Route path={item.path} key={index} render={(props)=>{
                                        let Com=item.component
                                        console.log(item)
                                        let porps={...this.props,...props}
                                        
                                        return <Com child={item.children} {...props}   />
                                    }}   
/>
                        }
                              if(item.type==='redirect'){
                                  return <Redirect from={item.from} key={index} to={item.to}/>
                               }
                           return null
                    })
                // RouterConfig.map((item,key)=>{
                //     if(item.type==='route'){
                //         return <Route path={item.path} component={item.component}/>

                //     }
                //     if(item.type==='redirect'){
                //         return <Redirect from={item.from}  to={item.to}/>
                //     }
                //     return null

                // })
            }
       
    </Switch>
    }
}
export default RouterView