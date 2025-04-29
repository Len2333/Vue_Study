<template>
    <div class="person">
     <ul>
        <li v-for="item in x.list" :key="item.id">{{item.name}} -- {{item.age}}</li> 
    </ul>

    </div>
</template>



<script lang="ts" setup name='Person'>
import { defineProps,withDefaults } from 'vue';
import {type Persons} from '../types/index'

//defineProps接收一个数组，里面是你从父类传过来的属性名,参数名要和父类传过来的属性名一样
//defineProps(['a'])  //只接收a，这个a可以在模板里直接被访问

//接收list+限制类型
//<{list:Persons}>表示我接收的对象list，类型符合Persons,list可以在模板直接被访问
// defineProps<{list:Persons}>()


//接收list+限制类型+限制必要性+指定默认值
defineProps<{list?:Persons}>() //加了？这个list就是可选，父类不传也不会报错
withDefaults(defineProps<{list?:Persons}>(),{
    list:()=>[{id:'1',name:'张三',age:18}]
})  //withDefaults接收两个参数，第一个是defineProps，第二个是默认值,

//接收并保存
let x = defineProps(['a','b',"list"]) //返回的是一个对象，包含所有接收的数据
console.log(x)  //输出：{a: 1, b: 2}
console.log(x.a) //输出：1
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



