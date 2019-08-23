//1:引入第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
//2:配置第三方模块
 //2.1:配置连接池
 var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   database:"qmkg",
   connectionLimit:15
 })
 //2.2:跨域
 var server = express();
 server.use(cors({
   origin:["http://127.0.0.1:8080","http://localhost:8080"],//数组内可以配置多个地址
   credentials:true
 }))
 //2.3:session
 server.use(session({
   secret:"加密专用",
   resave:true,
   saveUninitialized:true
 }))
//节约时间：静态资源全部在前端服务器里
//端口监听
 server.listen(3000);


//测试接口    测试方式  http://localhost:3000/cs
server.get("/cs",(req,res)=>{
  pool.query("SELECT * FROM qmkg_work",(err,result)=>{
    if(err)throw err;
    res.send(result)
  })
})


//第一个功能：用户登录
server.get("/login",(req,res)=>{
  var unum = req.query.unum;
  var upwd = req.query.upwd;
  var sql = "SELECT * FROM qmkg_user WHERE unum = ? AND upwd = ?";
  //3:json
  pool.query(sql,[unum,upwd],(err,result)=>{
      if(err)throw err;
      if(result.length==0){//找不到指定数据的情况
         res.send({code:-1,msg:"用户名或密码有误"});
      }else{
        //演示当前返回值result的格式状态       result=[{id:6666}]
         req.session.uid=result[0].uid;//将当前登录用户的uid保存到session对象
        //  console.log(req.session.uid)
         res.send({code:1,msg:"登录成功"});
      }
  })
})

//第二个功能：注册
server.get("/reg",(req,res)=>{
  var uname=req.query.uname;
  var unum=req.query.phone;
  var upwd=req.query.upwd;
  var sql="INSERT INTO qmkg_user VALUES(NULL,?,?,?,'uhead/moren.jpg','新晋歌艺学徒','男',18,'中国大陆',0,0);"
  pool.query(sql,[uname,unum,upwd],(err,result)=>{
      if(err)throw err;
      pool.query("SELECT * FROM qmkg_user WHERE unum = ? AND upwd = ?",[unum,upwd],(err,result)=>{
        if(err)throw err;
        req.session.uid=result[0].uid;//将当前登录用户的uid保存到session对象
        res.send({code:1,msg:"注册成功"})
      })
  })
})

//第三个功能：主页的加载
server.get("/index",(req,res)=>{
  var us=[];//保存用户信息和歌曲信息
  pool.query("SELECT uid,uname,uhead FROM qmkg_user",(err,result)=>{
    if(err)throw err;
    us[0]=result;
    pool.query("SELECT wid,wimg,wname,wst FROM qmkg_work",(err,result)=>{
      if(err)throw err;
      us[1]=result;
      res.send(us);
    })
  })
})


//第四个功能：判断用户点击个人中心会到注册页面还是个人页面
server.get("/head",(req,res)=>{
  var uid=req.session.uid
  if(uid==null){
    res.send("/login")
  }else{
    res.send("/zhongxing")
  }
})

//第五个功能：加载音乐资源
server.get("/music",(req,res)=>{
  var wid=req.query.wid;
  var somanymusic=[];
  pool.query("SELECT * FROM qmkg_work WHERE wid=?",[wid],(err,result)=>{
    if(err)throw err;
    somanymusic[0]=result;
    pool.query("SELECT wid,wname FROM qmkg_work",(err,result)=>{
      if(err)throw err;
      somanymusic[1]=result;
      res.send(somanymusic)
    })
  })
})

//第六个功能：个人主页的访问
server.get("/myzhongxing",(req,res)=>{
  var uid=req.session.uid
  // console.log(uid)
  var myzhongxing=[]
  pool.query("SELECT * FROM qmkg_user WHERE uid=?",[uid],(err,result)=>{
    if(err)throw err;
    myzhongxing[0]=result;
    pool.query("SELECT * FROM qmkg_work WHERE uid=?",[uid],(err,result)=>{
      if(err)throw err;
      myzhongxing[1]=result;
      res.send(myzhongxing);
    })
  })
})

//第七个功能：他人主页的访问
server.get("/otherszhongxing",(req,res)=>{
  var uid=req.query.uid;
  var otherszhongxing=[]
  pool.query("SELECT * FROM qmkg_user WHERE uid=?",[uid],(err,result)=>{
    if(err)throw err;
    otherszhongxing[0]=result;
    pool.query("SELECT * FROM qmkg_work WHERE uid=?",[uid],(err,result)=>{
      if(err)throw err;
      otherszhongxing[1]=result;
      res.send(otherszhongxing);
    })
  })
})


