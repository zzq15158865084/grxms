<template>
  <div id="app">
    <router-view></router-view><!-- 占位符，配置的路由组件会显示到这里 -->
  </div>
</template>

<script>
export default {
  // mounted(){
  //   var hastouch = 'ontouchstart' in window?true:false//true 移动端 false PC端
  //   if(hastouch){
  //       //移动端
  //       window.onload = function(){
  //           window.addEventListener('touchstart', touchstart);
  //           window.addEventListener('touchmove', touchMove);
  //           window.addEventListener('touchend', touchend);
  //           }
            
  //           var _start1 = 0; 
  //           var _end1 = 0;
  //           function touchstart(event) {
  //           var touch = event.targetTouches[0];
  //           _start1 = touch.pageY; 
  //           }

  //           function touchMove(event){ 
  //           var touch = event.targetTouches[0]; 
  //           _end1 =touch.pageY - _start1; 
  //           app.style.marginTop=_end1+"px";
  //           //下滑才执行操作 
  //           if(_end1 > 200){     //200即手机下滑屏幕的距离，超过200则执行刷新动作
  //           location.reload();
  //           } 
  //           }

  //           function touchend(){
  //           app.style.marginTop="0px";
  //           } 
  //   }else{
  //       //PC端
  //       window.onload = function(){
  //           window.addEventListener('mousedown', mousedown);
  //           window.addEventListener('mousemove', mousemove);
  //           window.addEventListener('mouseup', mouseup);
  //           }
            
  //           var _start2 = 0; 
  //           var _end2 = 0;
  //           var can=false;
  //           function mousedown(e) {
  //               can=true;
  //               _start2 = e.clientY;
  //           }

  //           function mousemove(e){ 
  //               if(can){
  //                   _end2 = e.clientY-_start2;
  //                   app.style.marginTop=_end2+"px";
  //                   //下滑才执行操作 
  //                   if(_end2 > 200){     //200即手机下滑屏幕的距离，超过200则执行刷新动作
  //                       location.reload();
  //                   } 
  //               }
  //           }
            
  //           function mouseup(){
  //           can=false;
  //           app.style.marginTop="0px";
  //           } 
  //   }
  // },
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
