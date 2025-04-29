<template>
    <div class="person">
        <h2>中国</h2>
        <!-- <h2 id="title2">北京</h2>  这样写会有一个问题，如果别的组件里也有h2，那么就容易出现冲突。-->
        <h2 ref="title2">北京</h2>
        <h2>尚硅谷</h2>
        <button @click="showLog">点我输出person的h2</button>
    </div>
</template>



<script lang="ts" setup name='Person'>

import { ref } from 'vue'

let title2 = ref()
function showLog(){
    console.log(title2.value)
}
// function showLog(){
//     console.log(document.getElementById('h2'))
// }
    
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



