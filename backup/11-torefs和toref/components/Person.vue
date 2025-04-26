<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>

    </div>
</template>



<script lang="ts" setup name='Person'>
import {reactive,toRefs,toRef} from 'vue'
let person = reactive({
    name:'张三',
    age:18,
})
//let {name,age} = person //直接解构person对象，name和age不是响应式的，相当于把person里name和age变量的值复制赋值给name、age两个新的对象
let {name,age} = toRefs(person)  //toRefs将响应式对象中每一组key：value都拎出来，且把里面的value变成对原value的响应式引用，形成一个新的对象
// console.log(toRefs(person))              //输出结果: {name: RefImpl, age: RefImpl}，所以这里的name和age是对象的引用，是响应式的
                                            //name变成了对name的值的引用，age也是，所以新的name也是对原来的值的引用，而不是被赋予一个新值的新的name

//这一节看我自己的拓展笔记，涉及到响应式对象解构赋值，包括基础型和引用型

let nl = toRef(person,'age')  //nl指向person.age的值
function changeAge(){
    person.age += 1
}
function changeName(){
    name.value += '~'
    console.log(name.value,person.name)  //name.value是响应式的，它就是person.name的值的引用

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



