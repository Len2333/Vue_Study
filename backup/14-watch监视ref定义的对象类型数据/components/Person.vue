<template>
    <div class="person">
        <h1>监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人</button>

    </div>
</template>



<script lang="ts" setup name='Person'>
import { ref,watch } from 'vue'
//数据
let person = ref({
    name:'张三',
    age:18
})
//方法
function changeName(){
    person.value.name += '~'
     
    }

function changeAge(){
    person.value.age +=1
}

function changePerson(){     //赋予了person新的值，地址值发生了变化，所以会触发watch
    person.value = {
        name:'李四',
        age:20
    }
}

/*watch(谁,回调函数,配置项)
情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要开启深度监视*/
watch(person,(newValue,oldValue)=>{                          //不要写sum.value，官方说了可以监视ref定义的数据，sum是数据。
    console.log('person值变化了',newValue,oldValue)
},{deep:true,immediate:true})       //正常只有监视的对象变化了才调用回调函数，配置immediate:true加载界面直接调用一次回调函数
//还会有个问题，如果只是改属性，那person这个对象地址其实没变，oldValue和newValue会读到同一个对象，所以返回的值都是person对象改过后的值


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



