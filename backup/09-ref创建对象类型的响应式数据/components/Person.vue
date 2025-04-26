<template>
    <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{ car.Price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="plus">点我＋1</button>
    
    </div>
</template>



<script lang="ts" setup name='Person'>
import { ref,reactive } from 'vue';
  //数据
  let car =ref({brand:'奔驰',Price:100})
  let sum = ref('123321')
  console.log("这是",sum)
  console.log("这是",car)
  

  //方法
  function changePrice(){
        car.value.Price += 10     //ref定义的数据，在js层要动需要加.value，和reactive有区别 
    }

  function plus(){
    sum.value += 1
  }
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

</style>