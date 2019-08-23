<template>
    <div class="bigfather">
        <!-- 这里是听音乐组件listen.vue -->
        <headddd></headddd>
        <div class="listentop" id="musicfather">
            <img src="listener/wubang.png" class="bofangji">
            <img :src="fm" :data-uid="uid" class="fengmian">
            <audio :src="musicsrc" id="thismusic"></audio>
            <img src="listener/beforemusic.png" title="上一首" style="width:70px;position:absolute;top:300px;left:50px;" @click="tobefore">
            <img src="listener/lastmusic.png" title="下一首" style="width:70px;position:absolute;top:300px;right:50px;" @click="tolast">
            <div style="position:absolute;top:275px;left:125px;width:250px;height:100px;overflow:hidden;">
                    <div style="height:25px;font-size:16px;margin-top:2px;opacity:0.5;">{{beforesing}}</div>
                    <div style="height:45px;font-size:30px;color:#E9C201;padding-top:5px;background:url('listener/bg.gif')">{{nowsing}}</div>
                    <div style="height:25px;font-size:16px;opacity:0.5;">{{lastsing}}</div>
            </div>
        </div>
            <img id="HCD" src="listener/cd.png" class="cdo" :style="rela" @mousedown="downself" @mouseup="upself">
        <!--<div>{{`${canmove}+${xself}+${yself}+${Xself}+${Yself}+${needX}+${Maxx}+${Minx})`}}</div>--><!--测试必用！！！-->
        <div>
            <div>
                <hr style="background-color:#F6F6F6;width:98%;">
                <div style="display:flex;justify-content:space-between;padding-top:10px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <router-link :to="{path:'/zhongxing/'+this.uid}"><img :src="uhead" style="height:50px;border-radius:50px;margin-right:12px;"></router-link>
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            {{wname}}
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;color:#858585">
                            <span style="display:inline-block;background-image:url('/images/maybe/sprite_icon.png');height:15px;width:15px; background-position:28px -110px;"></span>
                            <span>{{wst}}</span>
                            <span style="display:inline-block;background-image:url('/images/maybe/sprite_icon.png');height:15px;width:15px; background-position:95px -224px;margin-left:3px;"></span>
                            <span>{{wly}}</span>
                            <span style="display:inline-block;background-image:url('/images/maybe/sprite_icon.png');height:15px;width:15px; background-position:67px -224px;margin-left:3px;"></span>
                            <span>1</span>
                            <span style="display:inline-block;background-image:url('/images/maybe/sprite_score.png');height:13px;width:10px; background-position:-34px 1px;margin-left:3px;"></span>
                        </span>
                    </div>
                    <a style="display:inline-block;height:25px;width:50px;background:#F04F43;border-radius:10px;margin-right:10px;color:#fff;text-align:left;margin-top:16px;text-decoration:none" href="#">
                        关注
                        <span style="display:inline-block;margin-top:2px;height:15px;width:13px;background-image:url('/images/maybe/sprite_icon.png'); background-position:25px -165px;"></span>
                    </a>
                </div>
                <hr style="background-color:#F6F6F6;width:98%;opacity:0.2">
                <p style="text-align:left;margin-left:12px;">一想到你，梦就充满温度</p>
                <p style="color:#858585;text-align:left;margin-left:12px;">06-21 01:00 iPhone 7 Plus</p>

            </div>
            <div style="height: 10px;background-color:#f6f6f6;border-top: 1px solid #efefef;border-bottom: 1px solid #efefef;"></div>
            <div style="padding:25px 0px;">
                <a style="display:inline-block;width: 290px;height: 40px;border: 1px solid #f04f43;color: #f04f43;border-radius:99px;font-size:18px;line-height: 40px;text-decoration:none" href="https://c.y.qq.com/r/61AY">打开全民K歌，演唱这首歌</a>
            </div>
            <div style="height: 10px;background-color: #f6f6f6;border-top: 1px solid #efefef;border-bottom: 1px solid #efefef;"></div>
            <div style="padding:25px 0px;">
                <div style="text-align:left;margin-left:12px;">礼物榜:</div>
                <div style="display:flex;justify-content:space-between;margin-top:15px;color:#868585">
                    <div style="margin-left:12px;">
                        <span style="display:inline-block;width:40px;height:68px;margin-left:5px;">
                            <img src="uhead/2.jpg" style="width:40px;border-radius:50%;">
                            <span style="margin-top:5px;">33</span>
                        </span>
                    </div>
                    <div style="margin-left:12px;">
                        <span style="display:inline-block;width:40px;height:68px;margin-left:5px;">
                            <img src="uhead/3.jpg" style="width:40px;border-radius:50%;">
                            <span style="margin-top:5px;">12</span>
                        </span>
                    </div>
                    <div style="margin-left:12px;">
                        <span style="display:inline-block;width:40px;height:68px;margin-left:5px;">
                            <img src="uhead/4.jpg" style="width:40px;border-radius:50%;">
                            <span style="margin-top:5px;">10</span>
                        </span>
                    </div>
                    <div style="margin-left:12px;">
                        <span style="display:inline-block;width:40px;height:68px;margin-left:5px;">
                            <img src="uhead/5.jpg" style="width:40px;border-radius:50%;">
                            <span style="margin-top:5px;">9</span>
                        </span>
                    </div>
                    <div style="margin-left:12px;">
                        <span style="display:inline-block;width:40px;height:68px;margin-left:5px;">
                            <img src="uhead/6.jpg" style="width:40px;border-radius:50%;">
                            <span style="margin-top:5px;">1</span>
                        </span>
                    </div>
                    <div style="margin-left:12px;">
                        <span style="display:inline-block;width:40px;height:68px;margin-left:5px;">
                            <img src="uhead/7.jpg" style="width:40px;border-radius:50%;">
                            <span style="margin-top:5px;">1</span>
                        </span>
                    </div>
                    <span style="margin-right:12px;height:12px;width:11px;background-image:url('/images/index.png'); background-position:11px 71px;margin-top:31px;"></span>
                </div>
            </div>
            <div style="height: 10px;background-color: #f6f6f6;border-top: 1px solid #efefef;border-bottom: 1px solid #efefef;"></div>
            <div>
                <div style="margin-left:12px;font-size:16px;text-align:left;margin:10px 0px;"><span>评论</span><span style="font-size:15px;color:#868585;margin-left:10px;">32</span></div>

                <div style="display:flex;justify-content:space-between;padding:10px 0px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <img src="uhead/1.jpg" style="height:40px;border-radius:50px;margin-right:12px;">
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            知音
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;">
                            <span>性感又魅惑，你的嗓音俘虏了多少迷妹！</span>
                        </span>
                    </div>
                    <span style="display:inline-block;height:25px;width:200px;text-align:right;margin-right:10px;color:#868585;">06-24 10:37</span>
                </div>
                <hr style="width:98%;border:0;background-color:rgb(0, 246, 246);opacity:0.3;height:1px;">

                <div style="display:flex;justify-content:space-between;padding:10px 0px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <img src="uhead/1.jpg" style="height:40px;border-radius:50px;margin-right:12px;">
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            知音
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;">
                            <span>气息稳如山，音准稳如钟</span>
                        </span>
                    </div>
                    <span style="display:inline-block;height:25px;width:200px;text-align:right;margin-right:10px;color:#868585;">06-24 10:37</span>
                </div>
                <hr style="width:98%;border:0;background-color:rgb(0, 246, 246);opacity:0.3;height:1px;">

                <div style="display:flex;justify-content:space-between;padding:10px 0px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <img src="uhead/2.jpg" style="height:40px;border-radius:50px;margin-right:12px;">
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            水观月
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;">
                            <span>
                                美女唱的好棒啊
                                <img src="smalltextimg/bigsmile.gif" style="width:20px;">
                                <img src="smalltextimg/bigsmile.gif" style="width:20px;">
                            </span>
                        </span>
                    </div>
                    <span style="display:inline-block;height:25px;width:200px;text-align:right;margin-right:10px;color:#868585;">06-24 11:40</span>
                </div>
                <hr style="width:98%;border:0;background-color:rgb(0, 246, 246);opacity:0.3;height:1px;">

                <div style="display:flex;justify-content:space-between;padding:10px 0px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <img src="uhead/3.jpg" style="height:40px;border-radius:50px;margin-right:12px;">
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            single
                            <img src="smalltextimg/lovely.gif" style="width:20px;">
                            uncle
                            <img src="smalltextimg/onlycry.gif" style="width:20px;">
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;">
                            <span>
                                轩轩
                                <img src="smalltextimg/tongue.gif" style="width:20px;">
                                ～猪猪报道！灰常灰常好听的
                            </span>
                        </span>
                    </div>
                    <span style="display:inline-block;height:25px;width:200px;text-align:right;margin-right:10px;color:#868585;">06-24 13:11</span>
                </div>
                <hr style="width:98%;border:0;background-color:rgb(0, 246, 246);opacity:0.3;height:1px;">

                <div style="display:flex;justify-content:space-between;padding:10px 0px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <img src="uhead/4.jpg" style="height:40px;border-radius:50px;margin-right:12px;">
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            简
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;">
                            <span>不要压抑你的天赋9( ˶˙º̬˙˶ )9</span>
                        </span>
                    </div>
                    <span style="display:inline-block;height:25px;width:200px;text-align:right;margin-right:10px;color:#868585;">06-25 08:11</span>
                </div>
                <hr style="width:98%;border:0;background-color:rgb(0, 246, 246);opacity:0.3;height:1px;">

                <div style="display:flex;justify-content:space-between;padding:10px 0px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <img src="uhead/5.jpg" style="height:40px;border-radius:50px;margin-right:12px;">
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            chvhh
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;">
                            <span>西少</span>
                        </span>
                    </div>
                    <span style="display:inline-block;height:25px;width:200px;text-align:right;margin-right:10px;color:#868585;">07-04 11:43</span>
                </div>
                <hr style="width:98%;border:0;background-color:rgb(0, 246, 246);opacity:0.3;height:1px;">

                <div style="display:flex;justify-content:space-between;padding:10px 0px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <img src="uhead/6.jpg" style="height:40px;border-radius:50px;margin-right:12px;">
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            传说。。冰雪
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;">
                            <span>声音宽厚如深海，我已深深沦陷！</span>
                        </span>
                    </div>
                    <span style="display:inline-block;height:25px;width:200px;text-align:right;margin-right:10px;color:#868585;">07-05 10:04</span>
                </div>
                <hr style="width:98%;border:0;background-color:rgb(0, 246, 246);opacity:0.3;height:1px;">

                <div style="display:flex;justify-content:space-between;padding:10px 0px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <img src="uhead/6.jpg" style="height:40px;border-radius:50px;margin-right:12px;">
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            传说。。冰雪
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;">
                            <span>靓颖海豚音在你面前也不过如此！</span>
                        </span>
                    </div>
                    <span style="display:inline-block;height:25px;width:200px;text-align:right;margin-right:10px;color:#868585;">07-05 10:04</span>
                </div>
                <hr style="width:98%;border:0;background-color:rgb(0, 246, 246);opacity:0.3;height:1px;">

                <div style="display:flex;justify-content:space-between;padding:10px 0px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <img src="uhead/7.jpg" style="height:40px;border-radius:50px;margin-right:12px;">
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            无忧无虑
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;">
                            <span>
                                <img src="smalltextimg/yougood.gif" style="width:20px;">
                                <img src="smalltextimg/yougood.gif" style="width:20px;">
                                <img src="smalltextimg/yougood.gif" style="width:20px;">
                                <img src="smalltextimg/yougood.gif" style="width:20px;">
                                <img src="smalltextimg/yougood.gif" style="width:20px;">
                                <img src="smalltextimg/yougood.gif" style="width:20px;">
                                <img src="smalltextimg/yougood.gif" style="width:20px;">
                                <img src="smalltextimg/yougood.gif" style="width:20px;">
                            </span>
                        </span>
                    </div>
                    <span style="display:inline-block;height:25px;width:200px;text-align:right;margin-right:10px;color:#868585;">07-05 16:52</span>
                </div>
                <hr style="width:98%;border:0;background-color:rgb(0, 246, 246);opacity:0.3;height:1px;">

                <div style="display:flex;justify-content:space-between;padding:10px 0px;">
                    <div style="backgound:red;margin-left:10px;position:relative">
                        <img src="uhead/2.jpg" style="height:40px;border-radius:50px;margin-right:12px;">
                        <span style="position:absolute;top:3px;width:300px;text-align:left">
                            Victor
                            <img src="smalltextimg/sun.gif" style="width:20px;">
                            花执忧
                            <img src="smalltextimg/lovelytwo.gif" style="width:20px;">
                        </span>
                        <span style="position:absolute;top:32px;;width:300px;text-align:left;">
                            <span>好听好听</span>
                        </span>
                    </div>
                    <span style="display:inline-block;height:25px;width:200px;text-align:right;margin-right:10px;color:#868585;">07-09 18:59</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import headddd from "../components/head.vue"
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            musicID:"",
            musicsrc:"",
            uhead:"",
            uid:"",
            fm:"",
            wname:"",
            wst:"",
            wly:"",
            nowsing:"",
            beforesing:"",
            lastsing:"",
            canmove:false,
            xself:0,
            yself:0,
            Xself:0,
            Yself:0,
            needX:0,
            Minx:0,
            Maxx:0,
            rela:{top:"52px",left:this.neexX,height:"180px"},
            allmusic:[],
         }
    },
    created(){
        this.tonew();
    },
    methods:{
        tonew(){
        this.needX=document.documentElement.clientWidth//解决页面刷新页面
        window.scrollTo(0,0)
        this.musicID=this.$route.params.wid;
        // console.log(this.musicID)
        this.axios.get("music",{params:{wid:this.musicID}}).then((result)=>{
            //  console.dir(result.data);
            this.musicsrc=result.data[0][0].wmp3;
            this.fm=result.data[0][0].wimg;
            this.uhead=result.data[0][0].uhead;
            this.wname=result.data[0][0].wname;
            this.uid=result.data[0][0].uid;
            this.wst=result.data[0][0].wst;
            this.wly=result.data[0][0].wly;
            this.allmusic=result.data[1];
            //console.log(this.allmusic)
            setTimeout(()=>{
            if(this.musicID==1){
                this.nowsing=this.allmusic[0].wname;
                this.beforesing=this.allmusic[this.allmusic.length-1].wname;
                this.lastsing=this.allmusic[1].wname;
            }else if(this.musicID==this.allmusic.length){
                this.nowsing=this.allmusic[this.allmusic.length-1].wname;
                this.beforesing=this.allmusic[this.allmusic.length-2].wname;
                this.lastsing=this.allmusic[0].wname;
            }else{
                this.nowsing=this.allmusic[this.musicID-1].wname;
                this.beforesing=this.allmusic[this.musicID-2].wname;
                this.lastsing=this.allmusic[this.musicID].wname;
            }
            },1000)
            });
            // setTimeout(()=>{console.log(this.allmusic)},2000)
        // window.addEventListener("mouseup",()=>{
        //     this.canmove=false
        //     this.rela.transform="rotate(43200deg)"     //测试旋转
        //     this.rela.transition="all 800s"
        // })
        window.addEventListener("mousemove",(e)=>{
            if(this.canmove){
                this.Xself=e.clientX
                this.Yself=e.clientY
                this.rela.left=this.Xself-this.xself+"px";
                this.rela.top=this.Yself-this.yself+"px";
            }
        })
        window.addEventListener("load",()=>{
            this.needX=document.documentElement.clientWidth
        })
        window.addEventListener("resize",()=>{
            var bianpingkuan=document.documentElement.clientWidth-this.needX
            // console.log(this.needX/2-230)
            this.needX=document.documentElement.clientWidth
        })
        },
        downself(e){
            e.preventDefault();
            this.canmove=true;
            this.xself=e.offsetX;
            this.yself=e.offsetY;
            this.rela.transform=""     //测试旋转
            this.rela.transition=""
        },
        upself(e){
            // console.log('aaaaaa')
            // e.preventDefault();
            this.canmove=false
            // console.dir(this.rela)
            this.Maxx=this.needX/2-200;
            this.Minx=this.needX/2-260;
            if((this.Yself-this.yself)>20&&(this.Yself-this.yself)<80&&(this.Xself-this.xself)>this.Minx&&(this.Xself-this.xself)<this.Maxx){
                // console.log(1)
                this.rela.left=this.needX/2-230+"px"
                this.rela.top="49px"
                // console.log("触发了up事件")
                    this.rela.transform="rotate(43200deg)"     //测试旋转
                    this.rela.transition="transform 800s"      //重难点！！！ all过渡就会不出部分效果
                //音频播放部分
                thismusic.play();
                musicfather.style.height="375px"

            }else{
                this.rela.transform=""     //测试旋转
                this.rela.transition=""
                //音频暂停部分
                thismusic.pause();
                musicfather.style.height="250px"
            }
        },
        tobefore(){
                musicfather.style.height="250px";
                this.rela={top:'52px',left:this.neexX,height:'180px'}
            if(this.musicID==1){
                this.$router.push(`/listen/${this.allmusic.length}`)
            }else{
                this.$router.push(`/listen/${parseInt(this.musicID)-1}`)
            }
        },
        tolast(){
                musicfather.style.height="250px";
                this.rela={top:'52px',left:this.neexX,height:'180px'}
            if(this.musicID==this.allmusic.length){
                this.$router.push(`/listen/1`)
            }else{
                this.$router.push(`/listen/${parseInt(this.musicID)+1}`)
            }
        },
    },
    watch:{
        $route(){
            this.tonew();
        }

    },
    components:{
        "headddd":headddd
    },
}
</script>

<style scoped>
    .bigfather{
        min-width:500px;
    }
    .listentop{
        height:250px;
        width:500px;
        position:relative;
        margin:0 auto;
        overflow:hidden;
        transition:height 1400ms;
    }
    .bofangji{
        height:180px;
        position:absolute;
        top:47px;
        right:50%;
    }
    .fengmian{
        height:180px;
        position:absolute;
        top:47px;
        left:60%;
        border-radius:10%;
        border:5px solid #528B06;
        z-index:200
    }
    .cdo{
        position:absolute;
        border-radius:50%;
        z-index:50;
    }

</style>