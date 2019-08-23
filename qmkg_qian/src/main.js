import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入封装好的axios.js文件
import axios from "./axios.js"//虽然是灰色，但仍然有作用，注册的方法已经封装在内部

//1.完整引入：引入mint-ui库中所有组件
import MintUI from "mint-ui"//mint-ui是node_modules下的库名里面共20+个组件，MintUI是自定义变量名
//2.单独引入mint-ui样式css文件
import'mint-ui/lib/style.css'
//3.将mint-ui组件库中组件注册到vue实例中
Vue.use(MintUI);

//引入“阿里妈妈iconfont”字体图标文件.css文件
import './font/iconfont.css'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
