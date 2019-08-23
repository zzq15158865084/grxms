<template>
    <div class="erlou">
        <div class="erlouto">
            <h2 class="xiaobiao">热门作品推荐</h2>
        </div>
         <div class="box"> 

            <router-link :to="{path:'/listen/'+elem.wid}" class="boxkonge" v-for="(elem,i) of sing" :key="i" :data-wid="elem.wid" >
                <img :src="elem.wimg" class="ge" alt="">
                    <div class="jianjie1">
                            <p class="ziti">{{elem.wname}}</p>
                            <p class="erjitu"></p>
                            <p class='erji'>{{elem.wst}}</p> 
                    </div>
            </router-link>

        </div>
         <there :user="user"></there> 
    </div>
</template>
<script>
import there from "./there.vue"
export default {
    props:["user","sing"],
    components:{
        "there":there   
    },
    data(){
        return{}
    }
}
</script>
<style scoped >
    .erlou{
        position: absolute;
        width:100%;
        margin-top:748px;
    }
     .erlouto{
        margin-left:-1rem !important;
    }
    .xiaobiao{
        margin-top:50px;
        font-size: 5vw;
        line-height: 1.5;
        margin-left:-61%;
    }
    .box{
        width:100%;
        display:flex;
        justify-content: space-around; 
        flex-wrap: wrap; 
        
    }
    .boxkonge{
        width:45%;
        height:45%;
        box-shadow:10px 10px 10px #888888;
        margin-bottom:25px;
        position: relative;
        display: block;
        overflow: hidden;
        zoom: 1;
        
    }
    .ge{
        width:95%;
        
    } 
    .jianjie1{
        width:94%;
        height:21px;
        position: absolute;
        background-color:#000;
        left:3%;
        bottom:2%;
        background:rgba(0, 0,0,50%);
    }
    .ziti{
        font-size:15px;
        color:#fff;
        text-align: left;
        position: absolute;
        margin:0!important;
    }
  .erji{
        position: absolute;
        font-size:15px;
        width:6vw;
        top:2px;
        right: 5%;
        text-align:left!important;
        color: #fff;
        margin:0!important;
   }   
    .erjitu{
       
        background-image: url(../../public/images/333.png);
        background-position: -265px -174px;
        background-size: 489%;
        width: 31px;
        height: 19px;
        position: absolute;
        left:70%;
        margin:0!important;
    }  
     
</style>