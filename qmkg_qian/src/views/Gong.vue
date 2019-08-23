<template>
   <div @click="itemClick(id)">
    <div class="topimgandtx">
    <div class="neir">
       <p class="title">{{title}}</p>
       <p class="subtitle">{{subtitle}}</p>
    </div>
    <div class="imgandtxt">
      <img :src="imgurl"/>
     </div>
   </div>
   </div>
</template>
<script>
export default {
    props:{
     //声明接收元素数据
     imgurl:{default:""},
     title:{default:""},
     subtitle:{default:""},
     id:{default:""},
     itemClick:{type:Function}
   },
   data(){
       return{}
   },  
}
</script>
<style scoped>
*{margin:0;padding:0;}
.topimgandtx{
    justify-content:space-between;
    align-items:center; 
}
.imgandtxt{
    width:67%;
    margin:0 auto
}
.imgandtxt img{
    width:80%;
    margin: 26% 6% 0;
}
.neir{
    width:35%;
    height:230px;
    margin:0 auto;
    padding-top:3rem;
}
.title{
font-size:2.2rem;
margin-top:3rem;
}
.subtitle{
font-size:0.9rem;
} 
</style>