import Logindata from "./data.json"
import fs from "fs"
import path from "path"

let mock={
    '/login/json'(obj){
        console.log(obj)
        let isLog=Logindata.some(item=>item.username===obj.username&&item.password===obj.password)
        if(isLog){
            return '登陆成功'
        }
        return '没有注册此账号'

    },
    '/reggister/json'(obj){
        console.log(obj)
        let isNow=Logindata.some(item=>item.username==obj.username)
        if(isNow==false){
            Logindata.push(obj);
            fs.writeFileSync("../mock/data.json",JSON.stringify(Logindata))



        }
    }
}
export default mock
