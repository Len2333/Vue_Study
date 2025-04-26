<template>
    <div class="person">
        <h1>监视上述多个数据</h1>
        <h2>姓名：{{ person.name }}</h2><br>
        <h2>年龄：{{ person.age }}</h2><br>
        <h2>汽车：{{ person.car.c1 }}</h2><br>
        <h2>汽车：{{ person.car.c2 }}</h2><br>
        <button @click="ChangeName">修改姓名</button>
        <button @click="ChangeAge">修改年龄</button>
        <button @click="ChangeC1">修改第一台车</button>
        <button @click="ChangeC2">修改第二台车</button>
        <button @click="ChangeCar">修改整个车</button>



    </div>
</template>



<script lang="ts" setup name='Person'>
import { reactive,watch } from 'vue'

//数据
let person = reactive({
    name:'张三',
    age:18,
    car:{
        c1:'奔驰',
        c2:'宝马'
    }
})


//方法
function ChangeName(){
    person.name += '~'
}
function ChangeAge(){
    person.age += 1
}
function ChangeC1(){
    person.car.c1 = '保时捷'
}
function ChangeC2(){
    person.car.c2='奥迪'
}
function ChangeCar(){   //person不能整个改，整个改会重新赋值，使person失去响应性，但是car是person里面的属性，可以整个改
    person.car = {
        c1:'保时捷',
        c2:'奥迪'
    }
}

//情况5：要监视多个对象用列表括起来

watch([()=>person.car,()=>person.name],function(newValue,oldValue){        
    console.log('person.car值变化了',newValue,oldValue)
},{deep:true})

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



