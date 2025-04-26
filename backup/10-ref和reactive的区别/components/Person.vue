<template>
    <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{ car.Price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changeCar">修改汽车</button>


    </div>
</template>



<script lang="ts" setup name='Person'>
import { ref } from 'vue';
  //数据
  let car =ref({brand:'奔驰',Price:100})
  
  console.log(car)     //可以在控制台看到这个对象是ref类型，他的value属性就是用reactive转化的对象本身的值，也在控制台展示的就是proxy（Object）+对象
  //方法
  function changePrice(){
        car.value.Price += 10     //ref定义的数据，在js层要动需要加.value，和reactive有区别 
    }
    function changeBrand(){
        car.value.brand = '宝马'     
    }   
//上述修改都属于对car这个对象的属性修改，不影响响应式
    function changeCar(){
        // car = ref({brand:'保时捷',Price:200})     //重新赋值car，相当于重新创建了一个对象，这样写是响应式，但是会重新渲染整个组件
                                                    //点击changeCar按钮，但是浏览器界面没有变化   
                                                //这块代码将 car 变量重新指向了一个全新的 ref(reactive同理) 对象。但Vue的响应式系统只能追踪到car.value的变化，而无法感知 car 变量本身的替换。
                                                                        //Object.assign方法接收多个参数，把后面的参数属性加到一个参数上，相当于也是只修改了car的属性值，同属性的值会覆盖前面的属性值
        Object.assign(car.value,{brand:'保时捷',Price:200})                                                   //如果是reactive不需要.value

    //ref还可以这么改，因为.value是明确改属性值，reactive不行
        //car.value = {brand:'保时捷',Price:200}   //reactive对象car={brand:'保时捷',Price:200}或car=reactive({brand:'保时捷',Price:200})都不行，是重新赋值给car，vue无法识别

        
    }  
//ref和reactive使用原则：
//1、基础类型的响应式数据只能用ref
//2、对象、数组、函数等复杂类型的响应式数据，层级不深两者都可
//3、层级较深，用reactive
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



