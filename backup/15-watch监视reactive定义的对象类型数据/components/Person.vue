<template>
    <div class="person">
        <h1>监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人</button>

    </div>
</template>



<script lang="ts" setup name='Person'>
import { reactive,watch } from 'vue'
//数据
let person = reactive({
    name:'张三',
    age:18
})
//方法
function changeName(){
    person.name += '~'
     
    }

function changeAge(){
    person.age +=1
}

// function changePerson(){     
//     Object.assign(person,{name:'李四',age:20})   //这种写法相当于批量替换person的属性，不会替换person的地址值，和ref对象的.value替换不同，ref对象.value是完全替换value的地址，具体看笔记
// }

function changePerson(){     
    person={name:'李四',age:20}  
}



/*watch(谁,回调函数,配置项)
情况三：监视【reactive】定义的【对象类型】数据，隐式的创建了深度监视，且改深度监视无法关闭*/
watch(person,(newValue,oldValue)=>{                          
    console.log('person值变化了',newValue,oldValue)  //地址值不变，所以newValue,oldValue的值是一样的
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



