<template>
    <div class="person">
        <h2>求和{{ sum }}</h2>
        <button @click="add">+</button>
    </div>
</template>



<script lang="ts" setup name='Person'>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

let  sum = ref(0)

function add(){
    sum.value += 1
}


//创建函数就是setup函数

//挂载前  vue3需要import onBeforeMount，是一个函数，接受一个函数，挂载前调用接收的函数
onBeforeMount(()=>{console.log('子组件挂载前')})
//挂载后  同上
onMounted(()=>{console.log('子组件挂载后')})
//更新前
onBeforeUpdate(()=>{console.log('子组件更新前')})
//更新后
onUpdated(()=>{console.log('子组件更新后')})
//卸载前
onBeforeUnmount(()=>{console.log('子组件卸载前')})
//卸载后
onUnmounted(()=>{console.log('子组件卸载后')})
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



