<template>
    <div class="heise">
    <headddd></headddd>
        <img :src="imggg">
        <div class="jies">{{wenzi}}</div>
        <div class="mag">
        <div class="tmg">
          <img src="images/masay/m1.png">
          剩余 10 天
          <img src="images/masay/m2.png">
          4708 首
        </div>
          <a href="javascript:;">大赛详情
          <img src="images/masay/m3.png" style="height:16px;">
          </a>
        </div>
        <div class="mnu">
          奖品
          <span>奖品以实物为准</span>
        </div>
        <div class="dom">
        <div class="weiyi">
        <div>
        <img src="images/masay/1464306.png">
        <p>Kindle阅读器1个</p>
        </div>
        <div>
        <img src="images/masay/135163.png">
        <p>飞利浦话筒1个</p>
        </div>
        <div>
        <img src="images/masay/1464296.png">
        <p>全民K歌签约达人机会</p>
        </div>
        <div>
        <img src="images/masay/1464297.png">
        <p>有声小说发行及收益机会</p>
        </div>
        <div>
        <img src="images/masay/1464295.png">
        <p>优质作品收录官方歌单</p>
        </div>
        <div>
        <img src="images/masay/87675.jpg">
        <p>鲜花10朵</p>
        </div>
        </div>
        </div>
        <div class="biaoti">
          <div @click.prevent="active='tab1'">排行榜</div>
          <div @click.prevent="active='tab2'">最新</div>
          <div @click.prevent="active='tab3'">排行总榜</div>
        </div>
        <div>
          <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab1">
             <div class="ude">
             <div class="uids">1</div>
             <img class="tox" src="images/masay/0.jpg">
             <div class="gem">
               <p>绽放<img src="images/masay/e400230@2x.gif"><img src="images/masay/e400116@2x.gif">
               </p>
               <span><img src="images/masay/m2.png">再从头，多少美好不放手？(傲世九重天 2)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>2万</span></div>
             </div>
             <div class="ude">
             <div class="uids">2</div>
             <img class="tox" src="images/masay/1.jpg">
             <div class="gem">
               <p><img src="images/masay/e400285@2x.gif">張燈結綵<img src="images/masay/e400204@2x.gif">鳳凰于飛<img src="images/masay/e400115@2x.gif">樱花树下
               </p>
               <span><img src="images/masay/m2.png">九劫剑的秘密(傲世九重天 4)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>1.9万</span></div>
             </div>
             <div class="ude">
             <div class="uids">3</div>
             <img class="tox" src="images/masay/2.jpg">
             <div class="gem">
               <p>心<img src="images/masay/e6094.gif">有声小说求支持
               </p>
               <span><img src="images/masay/m2.png">老宅(黄金瞳 8)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>1.69万</span></div>
             </div>
             <div class="ude">
             <div class="uids">4</div>
             <img class="tox" src="images/masay/3.jpg">
             <div class="gem">
               <p>眼镜</p>
               <span><img src="images/masay/m2.png">老房拆迁(黄金瞳 7)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>1.5万</span></div>
             </div>
             <div class="ude">
             <div class="uids">5</div>
             <img class="tox" src="images/masay/4.jpg">
             <div class="gem">
               <p>佟先生<img src="images/masay/e400162@2x.gif">更新至44章
               </p>
               <span><img src="images/masay/m2.png">飞来横祸(黄金瞳 1)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>1.1万</span></div>
             </div>
             <div class="ude">
             <div class="uids">6</div>
             <img class="tox" src="images/masay/5.jpg">
             <div class="gem">
               <p><img src="images/masay/e400183@2x.gif">喵小文✑<img src="images/masay/e400156@2x.gif">
               </p>
               <span><img src="images/masay/m2.png">飞来横祸(黄金瞳 1)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>5112</span></div>
             </div>
             <div class="ude">
             <div class="uids">7</div>
             <img class="tox" src="images/masay/6.jpg">
             <div class="gem">
               <p>约翰唐</p>
               <span><img src="images/masay/m2.png">双瞳（上）（黄金瞳5）</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>4846</span></div>
             </div>
             <div class="ude">
             <div class="uids">8</div>
             <img class="tox" src="images/masay/7.jpg">
             <div class="gem">
               <p>善♚小草ꦿོ凉凉/等爱的东北丑妞
               </p>
               <span><img src="images/masay/m2.png">再从头，多少美好不放手？(傲世九重天 2)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>4245</span></div>
             </div>
             <div class="ude">
             <div class="uids">9</div>
             <img class="tox" src="images/masay/8.jpg">
             <div class="gem">
               <p><img src="images/masay/e400213@2x.gif">文曦<img src="images/masay/e400613@2x.gif"><img src="images/masay/e400085@2x.gif">
               </p>
               <span><img src="images/masay/m2.png">幻觉？(黄金瞳 3)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>3843</span></div>
             </div>
             <div class="ude">
             <div class="uids">10</div>
             <img class="tox" src="images/masay/9.jpg">
             <div class="gem">
               <p><img src="images/masay/e400123@2x.gif">温油油゛～
               </p>
               <span><img src="images/masay/m2.png">老房拆迁(黄金瞳 7)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>3722</span></div>
             </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
            <img src="images/masay/1219458.png">
            <p>暂时没有最新哦，请耐心等待，亲！</p>
            </mt-tab-container-item>     
            <mt-tab-container-item id="tab3">
            <div class="ude">
             <div class="uids">1</div>
             <img class="tox" src="images/masay/0.jpg">
             <div class="gem">
               <p>绽放<img src="images/masay/e400230@2x.gif"><img src="images/masay/e400116@2x.gif">
               </p>
               <span><img src="images/masay/m2.png">再从头，多少美好不放手？(傲世九重天 2)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>5万</span></div>
             </div>
             <div class="ude">
             <div class="uids">2</div>
             <img class="tox" src="images/masay/1.jpg">
             <div class="gem">
               <p><img src="images/masay/e400285@2x.gif">張燈結綵<img src="images/masay/e400204@2x.gif">鳳凰于飛<img src="images/masay/e400115@2x.gif">樱花树下
               </p>
               <span><img src="images/masay/m2.png">九劫剑的秘密(傲世九重天 4)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>4.5万</span></div>
             </div>
             <div class="ude">
             <div class="uids">3</div>
             <img class="tox" src="images/masay/5.jpg">
             <div class="gem">
                <p><img src="images/masay/e400183@2x.gif">喵小文✑<img src="images/masay/e400156@2x.gif">
               </p>
               <span><img src="images/masay/m2.png">飞来横祸(黄金瞳 1)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>4万</span></div>
             </div>
             <div class="ude">
             <div class="uids">4</div>
             <img class="tox" src="images/masay/11.jpg">
             <div class="gem">
               <p>Alice</p>
               <span><img src="images/masay/m2.png">医院(黄金瞳 2)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>3.8万</span></div>
             </div>
             <div class="ude">
             <div class="uids">5</div>
             <img class="tox" src="images/masay/6.jpg">
             <div class="gem">
               <p>约翰唐</p>
               <span><img src="images/masay/m2.png">双瞳（上）（黄金瞳5）</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>3万</span></div>
             </div>
             <div class="ude">
             <div class="uids">6</div>
             <img class="tox" src="images/masay/8.jpg">
             <div class="gem">
               <p><img src="images/masay/e400213@2x.gif">文曦<img src="images/masay/e400613@2x.gif"><img src="images/masay/e400085@2x.gif">
               </p>
               <span><img src="images/masay/m2.png">幻觉？(黄金瞳 3)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>2万</span></div>
             </div>
             <div class="ude">
             <div class="uids">7</div>
             <img class="tox" src="images/masay/7.jpg">
             <div class="gem">
               <p>善♚小草ꦿོ凉凉/等爱的东北丑妞
               </p>
               <span><img src="images/masay/m2.png">再从头，多少美好不放手？(傲世九重天 2)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>1.9万</span></div>
             </div>
             <div class="ude">
             <div class="uids">8</div>
             <img class="tox" src="images/masay/19.jpg">
             <div class="gem">
               <p><img src="images/masay/e400085@2x.gif">小昭『单曲收录』
               </p>
               <span><img src="images/masay/m2.png">出院(黄金瞳 4)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>1.8万</span></div>
             </div>
             <div class="ude">
             <div class="uids">9</div>
             <img class="tox" src="images/masay/15.jpg">
             <div class="gem">
               <p>carmen<img src="images/masay/e400569@2x.gif">流声机<img src="images/masay/e400616@2x.gif"><img src="images/masay/e400670@2x.gif"><img src="images/masay/e400085@2x.gif">
               </p>
               <span><img src="images/masay/m2.png">幻觉？(黄金瞳 3)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>1.8万</span></div>
             </div>
             <div class="ude">
             <div class="uids">10</div>
             <img class="tox" src="images/masay/13.jpg">
             <div class="gem">
               <p><img src="images/masay/e400751@2x.gif">CoCo克莉丝丁<img src="images/masay/e400737@2x.gif">
               </p>
               <span><img src="images/masay/m2.png">若是有来生，伴君天下舞！(傲世九重天 1)</span>
             </div>
             <div class="liw"><img src="images/masay/m4.png"><span>1.7万</span></div>
             </div>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
    </div>
</template>
<script>
import headddd from "../components/head.vue"
import houdongjson from "../json/houdonglist.json"
export default {
    data(){
        return{
            list:houdongjson,
            active:"tab1",
            imggg:"",
            wenzi:"",
        }
    },
    components:{
       "headddd":headddd
    },
    created(){
      this.imggg=sessionStorage.getItem("imggg")
      this.wenzi=sessionStorage.getItem("wenzi")
       window.scrollTo(0,0)    
    },
}
</script>
<style scoped>
.heise{
    width:100%;
}
.heise>img{
    width:100%;
    margin-top:46px;
}
.jies{
  text-align: justify;
  padding:15px 15px 0px 15px; 
}
.mag{
    padding:15px;
    padding-bottom:0px;
    text-align:left;
}
.mag>img{
    width:4%;
    vertical-align:text-bottom;
}
.tmg{
    display:inline-block;
    width:78%;
}
.tmg>img{
    width:18px;
    vertical-align:text-bottom;   
}
.mag a{
  text-decoration:none;
  color:#000;
}
.dom{
  width:100%;
  overflow:auto;  
  padding:15px 10px 10px 0px;
}
.weiyi{
    width:960px;
    height:150px;
    justify-content:space-around;
    display:flex;
}
.weiyi div{
   display:inline-block;
   width:15%;
   height:140px;
   text-align:center;
   padding:5px 0;  
   background-color:rgba(50,44,43,0.3);
   border-radius:5px;
}
.weiyi div img{
    width:50%;
    margin-top:20px;
}
.weiyi div p{
    padding:0 5px;
    font-size:0.3rem;
    color:#fff;
    margin-top:10px;
    margin-bottom:0;
}
.mnu{
text-align:left; 
font-size:1rem;
margin-left:15px; 
}
.mnu span{
font-size:0.5rem;
}
.biaoti div{
    display:inline-block;
    width:33%;
    text-align:center;
    color:#000;
}
.ude{
  width:100%;
  height:50px;
  display:flex;
  padding:5px 0;
}
.ude div>img{
  width:1rem;
}
.uids{
  width:12%;
  line-height:50px;
}
.ude>div{
  display:inline-block;
}
.tox{
  height:100%;
  border-radius:50%;
  display:inline-block;
  vertical-align:text-bottom;
}
.gem{
  width:60%;
  padding:10px 5px;
  text-align:left;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.gem span>img{
height:1rem;
vertical-align:text-bottom;
}
.gem span{
  height:20px;
}
.gem p>img{
height:1rem;
vertical-align:text-bottom;
}
.gem p{
  margin:0;
  margin-top:-5px;
  margin-bottom:5px;
  height:16px;
}
.liw{
  width:13%;
  line-height:50px;
}
.liw>span{
  font-size:0.3rem;
}
</style>