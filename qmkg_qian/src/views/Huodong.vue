<template>
   <div>
    <headddd></headddd>
    <div style="height:46px;"></div>
     <huo v-for="(item,i) of list.data" :key="i"
      :imgurl="item.img"
      :subtitle="item.subtitle"
      :id="item.id" 
      :itemClick="clickItem"> 
      </huo>
   </div>  
</template>
<script>
import  Huo from './Huo'
//1.1:引入json文件[数据]
//json 文件引入当前项目 js obj
import houdongjson from "../json/houdonglist.json"
import headddd from "../components/head.vue"
export default {
   data(){
     return {
       list:houdongjson
     }
   },//2:注册子组件
   methods:{
       clickItem(id){}
   },
   components:{
     "huo":Huo,
     "headddd":headddd
   },
   created(){
     window.scrollTo(0,0)    
   },
}
</script>
<style scoped>
.itemstyle{
    padding:5px;
    border-bottom:1px solid #d9d9d9;
}
</style>