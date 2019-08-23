<template>
    <div>
        <headddd></headddd>
        <div class="bgimg">
        <img src="images/maybe/feature_bg_phone.jpg">
        <div class="bgimg2">
         <img src="images/maybe/feature_title_pc@2x.png">
         <h3>创新玩法 音效升级 等你来唱</h3>
         <img class="ha2" src="images/lun2.png" />
        </div>
        <div class="bgimg3">
         <img src="images/maybe/feature_title@2x.png">
         <h3>歌房互动 新增榜单 更多玩法 等你来玩</h3>
         <img class="ha1" src="images/lun1.png"/>
        </div>
        </div>
        <gong v-for="(item,i) of list.data" :key="i"
        :imgurl="item.img"
        :title="item.title"
        :subtitle="item.subtitle"
        :id="item.id" 
        :itemClick="clickItem">
        </gong>
    </div>
</template>
<script>
import headddd from "../components/head.vue"
import  Gong from './Gong'
import gongnanjson from "../json/gongnanlist.json"
export default {
    data(){
   return{
     list:gongnanjson
   }
  },
  methods:{
       clickItem(id){}
   },
    components:{
     "gong":Gong,
     "headddd":headddd
   },
   created(){
     window.scrollTo(0,0)    
   },
 }
</script>
<style scoped>
.bgimg>img{
width:100%;
position: relative;
}
.bgimg>div{
    width:90%;
    margin:0 6%;
    }
.bgimg2{
    position: absolute;
    top:160px;
    animation:change 5s infinite; 
}
@keyframes change{
		0%{opacity:0;}
		50%{opacity:1;}
		100%{opacity:0;}
}
.bgimg2  h3{
    display:block;
    width:90%;
    font-size:24px;
    color:#fff;
    margin-top:0;
    text-align:left;
}
.bgimg2 img:first-child{
width:50%;
text-align:left;
display:block;
}
.ha1{
    width: 100%;
}
.bgimg3{
  position: absolute;
  top:140px; 
  animation:ball 5s infinite;
}
@keyframes ball{
		0%{opacity:1;}
		50%{opacity:0;}
		100%{opacity:1;}
}
.bgimg3  h3{
    display:block;
    width:54%;
    font-size:24px;
    color:#fff;
    margin-top:0;
    margin-bottom:0;
    text-align:left;
}
.bgimg3 img:first-child{
width:50%;
text-align:left;
display:block;
}
.ha2{
    width: 100%;
}
.itemstyle{
    padding:5px;
    border-bottom:1px solid #d9d9d9;
}
</style>