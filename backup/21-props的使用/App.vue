<template> 
    <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe">标签元素结果:a="1+1" b="2" c="x" d="9"</h2>
    <!-- 动态绑定（Vue 的 v-bind 或简写 :）属性值会被当作 JavaScript 表达式 解析，并与 Vue 实例的数据绑定。 -->
    <Person a="haha" b="hehe" v-bind:list="personList"/>
    <!-- 父类（App）传给子类（Person）的属性：a，值是"haha" -->
</template>

<script lang="ts" setup name="App">  
import Person from "./components/Person.vue"  
import {type Persons} from "./types/index"
import { reactive } from "vue";
let x = '9'

//泛型
let personList = reactive<Persons>(
    [
        {id:"1",name:"张三",age:18},
        {id:"2",name:"李四",age:19},
        {id:"3",name:"王五",age:20},
    ]
)

</script>

