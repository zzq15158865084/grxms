<template>
    <div>
        <div class="ercheng">
            <mt-button size="small" @click.native="click1" :class="checkeddd[0]?'clicked':'beforeclick'" >作品{{thisuserwork.length}}</mt-button>
            <mt-button size="small" @click.native="click2"  :class="checkeddd[1]?'clicked':'beforeclick'">专辑0</mt-button>
            <mt-button size="small" @click.native="click3"  :class="checkeddd[2]?'clicked':'beforeclick'">伴奏0</mt-button>
        </div>
        <div >
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="click1" class="buju">
                    <div class="zhuanjikuang" v-show="thisuserwork.length==0">
                        <img src="../../public/images/tips_empty.png" alt="">
                        <p>TA目前还没有任何作品哦！</p>
                    </div>
                    <router-link :to="{path:'/listen/'+elem.wid}" class='geqqukuang' v-for="(elem,i) of thisuserwork" :key="i">
                        <img :src="elem.wimg" width="95%" id="gequ" alt="">
                                <p class="ming">
                                {{elem.wname}}
                                </p>
                                <div>
                                <span class="jltu1"></span><span class="jinlin1">{{elem.wly}}</span>
                                &nbsp;&nbsp;&nbsp;
                                <span class="jltu2"></span><span class="jinlin2">{{elem.wst}}</span>
                                </div>
                    </router-link>   

                </mt-tab-container-item>
                <mt-tab-container-item id="click2">
                    <div class="zhuanjikuang">
                        <img src="../../public/images/tips_empty.png" alt="">
                        <p>TA目前还没有任何专辑哦！</p>
                    </div>
                </mt-tab-container-item>
                 <mt-tab-container-item id="click3">
                     <div class="banzhoukuang">
                         <img src="../../public/images/tips_empty.png" alt=""><br>
                        <span>TA目前还没有任何伴奏哦！<a href="/">现在去上传？</a></span>
                     </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
                <!-- <div>{{thisuserwork}}</div> -->
    </div>
</template>
<script>
export default {
    props:["thisuserwork"],
    data(){
        return{
            checkeddd:[true,false,false],
            active:"click1"
        }
    },
    methods:{
    click1(){
        this.checkeddd.splice(0,1,true)
        this.checkeddd.splice(1,1,false)
        this.checkeddd.splice(2,1,false)
        this.active="click1"
    },
    click2(){
        this.checkeddd.splice(1,1,true)
        this.checkeddd.splice(0,1,false)
        this.checkeddd.splice(2,1,false)
        this.active="click2"
    },
    click3(){
        this.checkeddd.splice(2,1,true)
        this.checkeddd.splice(0,1,false)
        this.checkeddd.splice(1,1,false)
        this.active="click3"
    },
    },
}
</script>
<style scoped>
.ercheng{
    width:100%;
    height:40px;
    border:1px solid #dfe3e6;
    margin-bottom: 10px;
    
}
.clicked{
   width:33%;
   text-align: center; 
   border-bottom:2px solid #F05549;
   color:#F05549;
}
.beforeclick{
   width:33%;
   text-align: center; 
   border-bottom:0;
   color:#000;
}
.buju{
    width:100%;
    display:flex;
    justify-content: space-between; 
    flex-wrap: wrap;
}
.geqqukuang{
    width:48%;
    position: relative;
    display: block;
    overflow: hidden;
    text-align:center;
    zoom: 1;
    text-decoration: none;
}
.ming{
    font-size: 18px;
    color:#000;
    margin-top:-6px;
    margin-bottom:0px;
}
.yangshi{
    position: relative;
    width:100%;

}
 .jinlin1{
    text-align: left;
    margin-left:0;
    font-size: 11px;
    color:red;
    vertical-align: middle;
}
.jinlin2{
    font-size: 11px;
    color:blue;
    text-align:right;
    vertical-align: middle;
}
.jltu1{
     background-image: url(../../public/images/333.png);
        background-position: -13px -217px;
        background-size: 800%;
        display: inline-block;
        width: 13px;
        height: 13px;
       vertical-align: middle;
}
.jltu2{
     background-image: url(../../public/images/333.png);
        background-position: -287px -107px;
        background-size: 800%;
         display: inline-block;
        width: 13px;
        height: 13px;
        vertical-align: middle;
}  
.zhuanjikuang{
    width: 100%;
    padding: 30px 0;
    font-size: 14px;
}
.banzhoukuang{
    
    
    width: 100%;
    padding: 30px 0;
    font-size: 14px;
}
.banzhoukuang a{
     text-decoration: none;
     color:red;
}
</style>