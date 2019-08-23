<template>
  <div id="appp">
  <headddd></headddd>
    <div style="margin-top:46px;"></div>
    <div class="vip_show">
      <div class="vip_open play">
        <svg id="open_svg3" width="700px" height="650px" viewBox="-100 -100 700 700">
        <path></path>
      </svg>
      <div class="open_logo">
        <div class="open_logo__bg"></div>
        <img class="open_logo__photo" src="../../public/images/vip.png" alt="">
        <div class="open_logo__light">
          <span class="open_logo__shine"></span>
        </div>
      </div>
      <!-- <div class="open_line1"></div>
      <div class="open_line2"></div> -->
      <div class="open_line3"></div>
      <div class="open_line4"></div>
    </div> 
    <div class="mod_wrap">
      <div class="vip_show__con play">
        <h2 class="vip_show__title">全民K歌VIP</h2>
        <h2 class="vip_show__title">7大特权尊贵体验</h2>
        <a href="javascript:;" class="vip_show__btn open_vip">开通VIP</a>
        <!-- <div class="vip_show__user"></div> -->
      </div>
    </div> 
    </div>
    <div class="mod_wrap">
      <ul class="power_list">
      <li class="power_list__item">
        <a href="javascript:;" class="power_list__box">
          <div class="power_list__icon">
            <span class="icon_show1"></span>
            <span class="icon_show2"></span>
            <span class="icon_show3"></span>
          </div>
          <h3 class="power_list__title">外显特权</h3>
          <p class="power_list__info">红名和尊贵图标</p>
        </a> 
      </li>
            <li class="power_list__item">
        <a href="javascript:;" class="power_list__box">
          <div class="power_list__icon">
            <span class="icon_rich1"></span>
            <span class="icon_rich2"></span>
          </div>
          <h3 class="power_list__title">财富特权</h3>
          <p class="power_list__info">每日领取更多鲜花</p>
        </a> 
      </li>
      <li class="power_list__item">
        <a href="javascript:;" class="power_list__box">
          <div class="power_list__icon">
            <span class="icon_song1"></span>
            <span class="icon_song2"></span>
          </div>
          <h3 class="power_list__title">音质特权</h3>
          <p class="power_list__info">高品质伴奏和录音</p>
        </a> 
      </li>
      <li class="power_list__item">
        <a href="javascript:;" class="power_list__box">
          <div class="power_list__icon">
            <span class="icon_down1"></span>
            <span class="icon_down2"></span>
          </div>
          <h3 class="power_list__title">下载特权</h3>
          <p class="power_list__info">离线播放、导出作品</p>
        </a>
      </li>
      <li class="power_list__item">
        <a href="javascript:;" class="power_list__box">
          <div class="power_list__icon">
            <span class="icon_family1"></span>
            <span class="icon_family2"></span>
            <span class="icon_family3"></span>
          </div>
          <h3 class="power_list__title">家族特权</h3>
          <p class="power_list__info">创建家族笼络人气</p>
        </a> 
      </li>
      <li class="power_list__item">
        <a href="javascript:;" class="power_list__box">
          <div class="power_list__icon">
            <span class="icon_file1"></span>
            <span class="icon_file2"></span>
          </div>
          <h3 class="power_list__title">投稿特权</h3>
          <p class="power_list__info">红名和尊贵图标</p>
        </a> 
      </li>
      <li class="power_list__item">
        <a href="javascript:;" class="power_list__box">
          <div class="power_list__icon">
            <span class="icon_up1"></span>
            <span class="icon_up2"></span>
          </div>
          <h3 class="power_list__title">上传特权</h3>
          <p class="power_list__info">站外制作站内秀</p>
        </a> 
      </li>
      </ul>
    </div>
    <div class="vip_grade">
      <div class="mod_wrap">
        <h2 class="vip_grade__title">VIP成长体系</h2>
        <p class="vip_grade__info">VIP成长速度：10点／天，年费VIP成长速度：15点／天</p>
        <a href="javascript:;" class="vip_grade__btn">开通VIP</a>
      </div>
      <div class="mod_wrap">
        <div class="vip_chart__photo">
          <img src="../../public/images/vip_chart_off.png" alt="" style="width:300px;">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headddd from "../components/head.vue"
export default {
   created(){
     window.scrollTo(0,0)    
   },
    data(){
      return{}
    },
    components:{
        "headddd":headddd
    },
}
</script>
<style scoped>
@import '../../public/css/vip.css';
</style>


