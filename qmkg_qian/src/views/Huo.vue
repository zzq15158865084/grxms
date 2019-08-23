<template>
<!--Message.vue-->
  <div @click="itemClick(id)">
    <div class="topimgandtx">
    <li>
    <b class="a" @click="toimg">
     <div class="imgandtxt">
      <img :src="imgurl"/>
       </div>
       <p class="subtitle">{{subtitle}}</p>
     </b>
    </li>
   </div>
   </div>
</template>
<script>
 export default { 
   props:{
     //声明接收元素数据
     imgurl:{default:""},
     subtitle:{default:""},
     id:{default:""},
     title:{default:""},
     itemClick:{type:Function}
   },
   data(){
     return {}
   },
   methods:{
     toimg(){
       sessionStorage.setItem("imggg",this.imgurl)             
       sessionStorage.setItem("wenzi",this.title)             
      //  this.$router.push({name:"Hdnair",params:{imggg:this.imgurl,wenzi:this.title}})
       this.$router.push({name:"Hdnair"})
     }
   },
 }  
</script>
<style scoped>
*{margin:0;padding:0;}
.topimgandtx{
    display:flex;
    justify-content:space-between;
    align-items:center; 
}
.topimgandtx li{
    list-style: none;
    margin:0 auto;
}
.topimgandtx li .a{
  text-decoration:none;
  color:#000;
}
.imgandtxt img{
    width:100%;
}
.subtitle{
margin:1rem 0;
font-size:1.25rem;
text-align:left;
}
</style>