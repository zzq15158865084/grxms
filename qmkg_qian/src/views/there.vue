<template>
    <div class="three">
        <div class="threeto">
            <h2 class="biaoti">k歌明星</h2>
        </div>
        <div class="box">

            <div class="gekuang" v-for="(elem,i) of user" :key="i" :data-uid="elem.uid">
                <router-link :to="{path:'/zhongxing/'+elem.uid}" class="tu">
                    <img :src="elem.uhead" class="go" alt="">
                </router-link>
            </div>

        </div>
    </div>    
</template>
<script>
export default {
    props:["user"],
    data(){
        return{}
    },
}
</script>
<style scoped>
    .three{
        position: absolute;
        width:100%;
        margin-top:-10px;
    }
    .threeto{
        margin-left:-1rem !important;
    }
    .biaoti{
        font-size: 5vw;
        line-height: 1.5;
        margin-left:-74%;
    }
    .box{
        width:100%;
        display:flex;
        justify-content: space-around; 
        flex-wrap: wrap;  
    }
    .gekuang{
        width:30%;
        margin:1%;
    }
    .boxkonge{
        width:50%;
        height:50%;
        border-radius:50%;
        position: relative;
        display: block;
        overflow: hidden;
        zoom: 1;  
        
    } 
    .go{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
</style>