<template>
  <div id="appp">
    <div id="logo">
      <img src="../../public/images/maybe/logo_240_100.png" >
    </div>
    <!-- 操作区域 -->
    <div id="operateDiv">
     <mt-field placeholder="QQ号码/手机号码/邮箱" v-model="unum"></mt-field>
    <mt-field placeholder="请输入你的QQ密码" v-model="upwd" type="password"></mt-field>
    </div>
    <div>
      <mt-button size="large" class="mybutton" type="primary" @click="login">登录</mt-button>
      <mt-button size="large">一键登录</mt-button>
    </div>
    <div class="forget">
      <ul>
        <li><router-link to="/">忘记密码?</router-link></li>
        <li><router-link to="/reg">注册新账号</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    window.scrollTo(0,0)
  },
  data(){
    return {
      unum:"",
      upwd:""
    }
  },
  methods:{
    login(){
      this.axios.get("login",{params:{unum:this.unum,upwd:this.upwd}}).then((result)=>{
          if(result.data.code>0){//登录成功时
              this.$router.push("/zhongxing");//进行配置路由路由的跳转
          }else{
              this.$toast(result.data.msg)//用户不存在就返回res.send说明内容
          }
      })      
    },
  },
}
</script>
<style scoped>

#appp{
  box-sizing: border-box;
  padding:38px;
  background: #eee !important;
  padding-bottom: 100%;
}
.logo>img{
  width: 100%;
}
.mint-cell{
  border-radius:4px;
  margin-bottom: 2px;
}
.forget >ul{
  padding-left:0; 
  list-style:none;
  display:flex;
  justify-content: space-between;
}

.forget a{
  display: inline-block;
  color: #437793;
  text-decoration: none;
  font-size: 14px;
}
.mybutton,.mint-button{
    background: #146fdf;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    margin-top: 15px;
    display: block;
    margin:15px 0;
}
.mint-button--default{
  background: #E7E7E7;
  color: #146fdf;
}
</style>
