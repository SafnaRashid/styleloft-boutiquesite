import axios from "axios"
const commonAPI=async (httpMetthod,url,reqBody)=>{
const reqConfig ={
  method: httpMetthod,
  url,
  data:reqBody
}
return await axios(reqConfig).then(res=>{
    return res
}).catch(err=>{
    return err
})
}
export default commonAPI