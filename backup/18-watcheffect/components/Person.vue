<template>
    <div class="person">
        <h2>需求：当水温达到60度或水位达到80厘米时，给服务器发个请求</h2>
      <h2>当前水温：{{ temp }}</h2>
      <h2>当前水位：{{ height }}</h2>
      <button @click="changeTemp">水温+10</button>
      <button @click="changeHeight">水位+10</button>
    </div>
</template>



<script lang="ts" setup name='Person'>

import { ref, watch , watchEffect} from 'vue'
let temp = ref(10)
let height = ref(0)
function changeTemp(){
        temp.value += 10    
    }

function changeHeight(){
        height.value += 10    
    }

//watch实现
// watch ([temp,height],(value)=>{
//     //从value中解构赋值获取最新的水温和水位
//     let [tempValue,heightValue] = value
//     if(tempValue >= 60 || heightValue >= 80){
//         console.log('给服务器发请求')
//     }
//})
//这里value是数组，和解构对象不同，不需要管赋值的参数名，是按照顺序来取值的


//watcheffect实现
watchEffect(()=>{
    if(temp.value >= 60 || height.value >= 80){
        console.log('给服务器发请求')
    }
})




</script>

<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;        
    }
    button{
        margin: 0 5px;
    }
    li{
        font-size: larger
    }
</style>



