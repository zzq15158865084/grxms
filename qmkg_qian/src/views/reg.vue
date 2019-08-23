<template>
  <div id="appp">
    <div id="logo">
    <div class="back">
      <router-link to="/"><img src="../../public/images/maybe/xiaozhagnyu.gif" alt=""></router-link>
    <!-- <span>&lt;&lt;</span> -->
    </div>
      <img src="../../public/images/maybe/logo_240_100.png" alt="">
    </div>
    <div id="welcome">
      <div>欢迎注册QQ</div>
      <div id="header">
        <div>每一天，乐在沟通。</div>
        <a href="javascript:;">免费靓号</a>
      </div>
    </div>
    <div id="reg">
      <mt-field placeholder="昵称" type="text" v-model="uname" :state="test1[0]"  @blur.native.capture="uname_vali">
      </mt-field>
      <span id="uname_msg">请输入2~8位汉字或字母开头的昵称，可包含数字、下划线</span>
      <mt-field placeholder="密码" type="password" v-model="upwd" :state="test1[1]" @blur.native.capture="upwd_vali"></mt-field>
      <span id="upwd_msg">请输入6~12位大小写、数字、下划线的密码</span>
      <mt-field placeholder="手机号码" type="text" v-model="phone" :state="test1[2]" @blur.native.capture="phone_vali"></mt-field>
      <span id="phone_msg">请输入11位正确的手机号码</span>
    </div>
    <div class="find">
      <a href="javascript:;">可通过该手机号找回密码</a>
    </div>
    <mt-button size="large" type="primary" :disabled="allAgree==false" @click="reg">立即注册</mt-button>
    <div class="agreement">
      <input type="checkbox" id="agree" v-model="isAgree">
      <label for="agree" class="checkbox">
        我已阅读并同意相关服务条款和隐私政策
      </label>
      <!-- <img src="" alt="">
      <img src="" alt=""> -->
    </div>
    <div class="footer">Copyright
      <span>©</span>
       1998-
       <!-- <script>document.write((new Date).getFullYear())</script> -->
       2019Tencent All Rights Reserved
    </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  created(){
    window.scrollTo(0,0)    
  },
  data(){
    return{
      uname:"",
      upwd:"",
      phone:"",
      isAgree:false,
      test1:["","",""]
    }
  },
   watch:{
  //   边输入边验证输入的内容
  //   当phone改变时，执行和失去焦点时完全相同的操作，验证
     uname(){
       this.uname_vali()
     },
     upwd(){
       this.upwd_vali()
     },
     phone(){
       this.phone_vali()
     }
  },
  computed:{
    allAgree(){
       let status=this.test1.every((elem)=>elem=="success");
        if(status&&this.isAgree){
          return true;
        }else{
          return false;
        }
    }
  },
  methods:{
    uname_vali(){
      var reg_uname = /^[\u4e00-\u9fa5\A-Za-z ][\w\u4e00-\u9fa5]{1,7}$/i;
      if(reg_uname.test(this.uname)){
        // this.$set(this.test1,0,"success")
        this.test1.splice(0,1,"success");
        // this.$toast("符合");
          return;
        }else{
        this.test1.splice(0,1,"error");
      }
    },
    upwd_vali(){
      var reg_upwd = /^\w{6,12}$/i;
      if(reg_upwd.test(this.upwd)){
        // this.$set(this.test1,0,"success")
        this.test1.splice(1,1,"success");
        // this.$toast("符合");
          return;
        }else{
        this.test1.splice(1,1,"error");
      }
    },
    phone_vali(){
      var reg_phone = /^1[3-8]\d{9}$/;
      if(reg_phone.test(this.phone)){
        // this.$set(this.test1,0,"success")
        this.test1.splice(2,1,"success");
        // this.$toast("符合");
          return;
        }else{
        this.test1.splice(2,1,"error");
      }
    },
    reg(){
      this.axios.get("reg",{params:{uname:this.uname,upwd:this.upwd,phone:this.phone}}).then(result=>{
          this.$messagebox("提示",result.data.msg);
          var t=setTimeout(()=>{
            this.$router.push("/zhongxing");
          },1000)
    })
    }
  }
}
</script>
<style scoped>
*{
  margin:0;padding:0;
}
div.back img{
  position: absolute;
  top:15px;left:-50px;
  width:200px;
}
/* #appp>span:first-child{
  display:block;
  text-align: left;
} */
#appp{
  box-sizing: border-box;
  padding:38px;
  background: #eee !important;
  padding-bottom: 100%;
  /* position: relative; */
}
a,.agreement .checkbox,.footer{
  text-decoration: none;
  font-size:14px;
  color:#999;
}
#welcome>div:first-child{
  font-family:"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB",STHeiti,"Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;
  font-size:30px; 
  text-align:left;
  margin-bottom:8px; 
}
#header{
  display: flex;
  justify-content:space-between;
  margin-bottom:20px;
}
#header a{
  color:#359eff;
}
#appp>div.find a{
  display:block;
  text-align:left !important;
}
.mint-cell{
  margin-bottom:2px;
}
#reg span{
  display: block;
  font-size:12px;
  text-align:left; 
  
}
.mint-button{
  margin:15px 0;
}
.agreement{
  text-align:left;
}
.footer{
    font-size:12px;
    margin: 50% 0;
    font-weight: lighter
}
</style>

