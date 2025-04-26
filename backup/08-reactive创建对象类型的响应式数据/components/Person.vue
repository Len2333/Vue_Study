<template>
    <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{ car.Price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>

    <h2>游戏列表：</h2>
    <ul>
        <!--v-for就像python的for循环，g是形参，随便叫什么都可以，带来的结果就是循环渲染出games里的每个元素  -->
        <!--v-bind就是为每个 <li> 绑定唯一标识符 g.id，优化渲染性能 -->
        <li v-for="g in games" v-bind:key="g.id">    
            {{ g.name }}
        </li>
    </ul>
    <button @click="changeFirstName">修改第一个游戏名字</button>
    <br>
    <h2>test：{{ deep.a.b.c }}</h2>
    <button @click="changedeep">测试：</button>
    </div>
</template>



<script lang="ts" setup name='Person'>
import { reactive } from 'vue';
  //数据
  let car =reactive({brand:'奔驰',Price:100})
  let games = reactive([
               {id:'01',name:'王者荣耀'},
               {id:'02',name:'原神'},
               {id:'03',name:'鸣潮'},
            ])
  let deep = reactive(      //深层特点，嵌套的对象也都是响应式，用changedeep方法改动页面也会生效
    {a:{b:{c:666}}}         
  ) 
  //方法
  function changePrice(){
        car.Price += 10 
    }

  function changeFirstName(){
        games[0].name='dota2'
  }
  function changedeep(){      
    deep.a.b.c = 123               //我这里写成deep.a.b.c = '123'会报错，是不能改成不同类型的吗？ 
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
    li{
        font-size: larger
    }
</style>