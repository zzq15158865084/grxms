<template>
    <div>
        <headddd></headddd>
         <div class="beij">
            <!-- <img src="../../public/images/bg.jpg" class="tu1" alt=""> -->
            <div class="zi1">
                <img src="../../public/images/phone_2.png" class="zitu1" alt="">
                <img src="../../public/images/phone_1.png" class="zitu2" alt="">
            </div>    
            <div class="kuo">
                 <a href="https://c.y.qq.com/r/61AY" class="anniu">打开</a>
                 <a href="https://sj.qq.com/" class="shoufa">   
                    应用宝联合独家首发    
                    <span class="jinling"></span>
                 </a>
            </div>           
        </div>
        <twe :user="user" :sing="sing"></twe>
    </div>
</template>
<script>
import headddd from "../components/head.vue"
import twe from "./twe.vue"
import { setTimeout } from 'timers';
export default {
    components:{
        "twe":twe,
        "headddd":headddd
    },
    data (){
        return{
            user:[],
            sing:[],
        };
    },
    created(){
      window.scrollTo(0,0)
      this.axios.get("index").then(result=>{
        //   console.dir(result)
        var sings=result.data[1];//歌曲
        var users=result.data[0];//用户
        var getArrayItems=function(arr, num) {//定义一个随机截取指定个数数组的函数
             var temp_array = new Array();
            for (var index in arr) {
                temp_array.push(arr[index]);
            }
            var return_array = new Array();
            for (var i = 0; i<num; i++) {
            if (temp_array.length>0) {
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
            } else {
             break;
            }
        }
        return return_array;
        }
        this.user=getArrayItems(users,6);
        this.sing=getArrayItems(sings,8);
    })
    // setTimeout(()=>{
    //     console.dir(this.user)
    //     console.dir(this.sing)}
    // ,5000)
    },
  mounted(){
    var hastouch = 'ontouchstart' in window?true:false//true 移动端 false PC端
    if(hastouch){
        //移动端
        window.onload = function(){
            window.addEventListener('touchstart', touchstart);
            window.addEventListener('touchmove', touchMove);
            window.addEventListener('touchend', touchend);
            }
            
            var _start1 = 0; 
            var _end1 = 0;
            function touchstart(event) {
            var touch = event.targetTouches[0];
            _start1 = touch.pageY; 
            }

            function touchMove(event){ 
            var touch = event.targetTouches[0]; 
            _end1 =touch.pageY - _start1; 
            app.style.marginTop=_end1+"px";
            //下滑才执行操作 
            if(_end1 > 200){     //200即手机下滑屏幕的距离，超过200则执行刷新动作
            location.reload();
            } 
            }

            function touchend(){
            app.style.marginTop="0px";
            } 
    }else{
        //PC端
        window.onload = function(){
            window.addEventListener('mousedown', mousedown);
            window.addEventListener('mousemove', mousemove);
            window.addEventListener('mouseup', mouseup);
            }
            
            var _start2 = 0; 
            var _end2 = 0;
            var can=false;
            function mousedown(e) {
                can=true;
                _start2 = e.clientY;
            }

            function mousemove(e){ 
                if(can){
                    _end2 = e.clientY-_start2;
                    app.style.marginTop=_end2+"px";
                    //下滑才执行操作 
                    if(_end2 > 200){     //200即手机下滑屏幕的距离，超过200则执行刷新动作
                        location.reload();
                    } 
                }
            }
            
            function mouseup(){
            can=false;
            app.style.marginTop="0px";
            } 
    }
  },
}
</script>
<style scoped>
    .headdd{
        background:transparent!important;
    }
    twe{
        clear:both;
    }
    .beij{
        width:100%;
        height:757px;
        position:absolute;
        background: no-repeat url(../../public/images/bg.jpg);
        background-size: cover;
        overflow: hidden;
    }
     .zi1{
        display: block;
        width: 100%;
        height: 0;
        padding-top: 100%;
    }
    .zitu1{
        position: absolute;
        z-index: 1;
        top: 0;
        width: 100%;
         margin-top:34%;
        margin-left:-50%;
    } 
    .zitu2{
        position: absolute;
        z-index: 2;
        top: 0;
        width: 100%;
        margin-top:34%;
        margin-left:-47%;
        }
    .kuo{
        position: absolute;
        z-index: 2;
        left: 0;
        bottom: 15%;
        width: 100%;
        text-align: center;
        color: #fff;
    }
    .anniu{
        display:block;
        width:60%;
        height: 45px;
        position: relative;
        margin-left:17%;
        border: 1px solid #fff;
        border-radius: 45px;
        font-size: 24px;
        text-decoration:none;
        line-height: 45px;
        text-align: center;
        color: #fff;
    }
    .shoufa{
        font-size:2vw;
        text-decoration:none;
        color:#000;
    }
    .jinling{
        display: inline-block;
        background-image: url("../../public/images/index@2x.png");
        background-position: 0 -46px;
        background-size: 147px;
        width: 67px;
        height: 18px;
        vertical-align: -4px;
    }
</style>