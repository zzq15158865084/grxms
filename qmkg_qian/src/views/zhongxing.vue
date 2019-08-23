<template>
    <div>
        <headddd></headddd>
        <div class="zhongx">
            <div class="tou"> 
                <div class="touxiang">
                    <img :src="uhead" alt="" width="100%">
                </div>
                <div class="er">
                    <span class="name">{{uname}}</span>
                    <span class="grade"></span>
                </div>
                <div class="san">
                    {{uqian}}&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="age"></span>&nbsp;&nbsp;
                   {{uage}}岁 &nbsp;&nbsp; {{uadd}}
                </div>
                <div class="fans"> 
                    <a href="/">粉丝{{uf}}</a>&nbsp;&nbsp;
                    <a href="/">关注{{ug}}</a>
                </div>
            </div>
        </div>
        <!-- <div>{{thisuserwork}}</div> -->
        <zhongxingxia  :thisuserwork="thisuserwork"></zhongxingxia>
    </div>
</template>
<script>
import headddd from "../components/head.vue"
import zhongxingxia from "./zhongxingxia.vue"
export default {
     components:{
        "zhongxingxia":zhongxingxia,
        "headddd":headddd   
    },
    data(){
        return{
            thisuser:"",
            thisuserwork:"",
            uhead:"",
            uname:"",
            uqian:"",
            uage:"",
            uadd:"",
            uf:"",
            ug:"",
        };
    },
    created(){
        var maybeuid=this.$route.params.uid
        if(maybeuid){//他人主页
            this.axios.get("otherszhongxing",{params:{uid:this.$route.params.uid}}).then((result)=>{
                // console.log(result.data)
                this.thisuser=result.data;
                this.uhead=this.thisuser[0][0].uhead
                this.uname=this.thisuser[0][0].uname
                this.uqian=this.thisuser[0][0].uqian
                //性别待定
                this.uage=this.thisuser[0][0].uage
                this.uadd=this.thisuser[0][0].uadd
                this.uf=this.thisuser[0][0].uf
                this.ug=this.thisuser[0][0].ug
                //传给子组件的数据
                this.thisuserwork=result.data[1]

            })         
        }else{//个人主页
            this.axios.get("myzhongxing").then((result)=>{
                // console.log(result.data)
                this.thisuser=result.data;
                this.uhead=this.thisuser[0][0].uhead
                this.uname=this.thisuser[0][0].uname
                this.uqian=this.thisuser[0][0].uqian
                //性别待定
                this.uage=this.thisuser[0][0].uage
                this.uadd=this.thisuser[0][0].uadd
                this.uf=this.thisuser[0][0].uf
                this.ug=this.thisuser[0][0].ug
                //传给子组件的数据
                this.thisuserwork=result.data[1]
            })            
        }
        

    },
    watch:{
        "$route":function(){location.reload()}//刷新页面
    },
}
</script>
<style scoped>
    .zhongx{
        width:100%;
        height:300px;
        background-image:url(../../public/images/center_default.jpg) 
    }
    .tou{
        width:100%;
        float: none;
        padding-top:72px;

    }
    .touxiang{
        width: 100px;
        height:100px;
        border:1px solid #000;
        border-radius: 50%;      
        margin:0 auto ;
        overflow:hidden;
    }
    .er{
        width:100%;
        padding: 10px;
        text-align: center;
        position: relative;
    }
    .name{
        font-size: 24px;
        /* margin-left:-28%; */
        color:#fff;
        /* max-width: 70%; */
    }
    .grade{
        display: inline-block;
        vertical-align:bottom;
        width: 52px;
        height: 26px;
        background-image: url(../../public/images/sprite_level_big@2x.png);
        background-position: 0 0;
        background-size:1150%;
        /* position: absolute;
        left:49%;
        top:29%; */
    }
    .san{
        font-size: 16px;
        color:#fff;
        position: relative;
    }
    .age{
        display: inline-block;
        width: 17px;
        height: 17px;
        background-image: url(../../public/images/333.png);
        background-position: -107px -197px;
        background-size:822%;
        vertical-align: -4px;
    }
    .fans a{
        text-decoration: none;
        font-size: 14px;
        color:#fff;
        margin-top:10px;
        text-align: center;
    }
</style>