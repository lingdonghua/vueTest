// 发送axios请求的工具类
import axios from 'axios'
// 调用 axios.create() 函数，创建一个 axios 的实例对象，用 request 来接收
const request = axios.create({
  baseURL: 'https://www.escook.cn'
})
// 默认导出
export default request
