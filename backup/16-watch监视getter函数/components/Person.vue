<template>
    <div class="person">
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

//情况4：监视响应式对象中的一个属性，且该属性是基础类型，watch不支持，但可以写成getter函数
//getter函数，也就是返回一个值的函数
// watch(()=>person.name,(newValue,oldValue)=>{        
//     console.log('person.name值变化了',newValue,oldValue)
// })
//箭头函数只有单表达式，返回值就是函数体中的值，不需要显示return，所以这里()=>person.name等价于() => { return person.name; }（不止单表达式，还有return语句）

//这样写监视不到"ChangeCar"，因为整个person.car被修改了，相当于变成了一个新的响应式对象，但是监视还在监视就得引用，所以不能成功触发
watch(person.car,function(newValue,oldValue){        
    console.log('person.car值变化了',newValue,oldValue)
})

//这样写可以监视监视person.car的地址值，car里面的值变化就不会被监视，car整体换掉会被监视，所以要用deep深度监视
watch(()=>person.car,function(newValue,oldValue){        
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



