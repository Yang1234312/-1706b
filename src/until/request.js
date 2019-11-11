import mock from "../mock/mock.js"
function RequestPort (url,obj){
    return new Promise(res=>{
        setTimeout(()=>{
            res(mock[url](obj))
        },Math.random()*1000)
    })

}
export default RequestPort