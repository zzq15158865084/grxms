<template>
    <div class="headdd" id="myhead">
            <img src="images/logo_dark.png" class="leftImg" @click="toZhu">
        <div class="fu">
            <a class="xiazai" href="https://c.y.qq.com/r/61AY">下载</a>
            <b class="iconfont icon-icon_toggle xiala" @click="changetruefalse"></b>
        </div>
        <div class="frameout" v-show="truefalse">
            <span class="triangle"></span><!-- 三角形 -->
            <ul class="outul">
                <router-link class="outa" to="/"><a href="#"><li>首页</li></a></router-link>
                <router-link class="outa" to="/Gongnen"><a href="#"><li>产品介绍</li></a></router-link>
                <router-link class="outa" to="/Huodong"><a href="#"><li>大赛</li></a></router-link>
                <router-link class="outa" :to="To"><a href="#"><li>个人中心</li></a></router-link>
                <router-link class="outa" to="/vip"><a href="#"><li>VIP中心</li></a></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            truefalse:false,
            To:"",
        }
    },
    created(){
        this.axios.get("head").then((result)=>{
         this.To=result.data
        });
        document.addEventListener("click",e=>{
                if(!e.target.classList.contains('xiala')){//除点击xiala按钮处，其他地方都会隐藏frameout菜单
                    this.truefalse=false;
                }
                }
            )
        },
    methods:{
        toZhu(){
            this.$router.push("/")//跳转到主页
        },
        changetruefalse(){
            this.truefalse=true;
        }
    },
    mounted(){
    // var hastouch = 'ontouchstart' in window?true:false//true 移动端 false PC端
    // if(hastouch){
    //     //移动端
    //     window.onload = function(){
    //         window.addEventListener('touchstart', touchstart);
    //         window.addEventListener('touchmove', touchMove);
    //         window.addEventListener('touchend', touchend);
    //         }
            
    //         var _start1 = 0; 
    //         var _end1 = 0;
    //         function touchstart(event) {
    //         var touch = event.targetTouches[0];
    //         _start1 = touch.pageY; 
    //         }

    //         function touchMove(event){ 
    //         var touch = event.targetTouches[0]; 
    //         _end1 =touch.pageY - _start1; 
    //         myhead.style.marginTop=_end1+"px";
    //         //下滑才执行操作 
    //         if(_end1 > 200){     //200即手机下滑屏幕的距离，超过200则执行刷新动作
    //         location.reload();
    //         } 
    //         }

    //         function touchend(){
    //         myhead.style.marginTop="0px";
    //         } 
    // }else{
    //     //PC端
    //     window.onload = function(){
    //         window.addEventListener('mousedown', mousedown);
    //         window.addEventListener('mousemove', mousemove);
    //         window.addEventListener('mouseup', mouseup);
    //         }
            
    //         var _start2 = 0; 
    //         var _end2 = 0;
    //         var can=false;
    //         function mousedown(e) {
    //             can=true;
    //             _start2 = e.clientY;
    //         }

    //         function mousemove(e){ 
    //             if(can){
    //                 _end2 = e.clientY-_start2;
    //                 myhead.style.marginTop=_end2+"px";
    //                 //下滑才执行操作 
    //                 if(_end2 > 200){     //200即手机下滑屏幕的距离，超过200则执行刷新动作
    //                     location.reload();
    //                 } 
    //             }
    //         }
            
    //         function mouseup(){
    //         can=false;
    //         myhead.style.marginTop="0px";
    //         } 
    // }
    },
}
</script>

<style>
    .headdd{
        position:fixed;
        top:0;
        width:100%;
        display:flex;
        justify-content:space-between;
        z-index:998;/* 是男人就上1000层 */
        background:#FFFFFF;
    }
    .headdd>.leftImg{
        height:30px;
        margin:8px;
    }
    .headdd>.fu{
        display:flex;
        justify-content:space-between;
        align-items:center;/* flex中垂直居中 */
        width:30%;
    }
    .headdd>.fu>.xiazai{
        display:inline-block;
        margin-left:7vw;
        width: 30%;
        height: 50%;
        text-align:center;
        line-height:29px;
        font-size:14px;
        color: #fff;
        border-radius: 20px;
        background-color: #f04f43;
        text-decoration:none;
        min-width:45px;
        min-height:24px;
    }
    .headdd>.fu>.xiala{
        font-size:30px;
        color:#EA675E;
        margin-right:7px;
        transform: scaleX(0.5)!important;
    }
    .frameout{
        width: 88px;
        height: 216px;
        border:1px solid #D9D9D9;
        border-radius: 10px;
        position:fixed;
        z-index:999;/* 是男人就上1000层 */
        top:47px;
        right:2vw;
        background-color: #fff;
        /* display:none; */
        }
    .triangle{
        width: 6px;
        height: 6px;
        display: inline-block;
        position: absolute;
        top: -3px;
        right:10px;
        background-color: #fff;
        border-bottom: 1px solid #D9D9D9;
        border-right: 1px solid #D9D9D9;
        transform:rotate(225deg);
    }
    .outul{
        list-style:none;
        padding:0px;
        margin:0px;
    }
    .outul>.outa{
        display: inline-block;
        width:80%;
        border-bottom:1px solid #D9D9D9;        
    }
    .outul>:last-child{
        border-bottom:0;
    }
    .outul>.outa>a{
        display: inline-block;
        line-height:37px;
        text-decoration:none;
        color:black;
        padding-bottom:3px;
        padding-top:3px;
        font-size:14px;
    }
</style>