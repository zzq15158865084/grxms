// 1.引入vue实例
import Vue from 'vue'
// 2.引入axios库
import axios from 'axios'
// 3.发送请求时保存session信息
axios.defaults.withCredentials=true;
// 4.设置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
// 5.将axios注册vue实例
Vue.prototype.axios=axios;
// 6.在main.js引入封装好的axios.js文件
   //这一步写在main.js