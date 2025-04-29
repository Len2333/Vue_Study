<template>
    <div class="person">

    </div>
</template>



<script lang="ts" setup name='Person'>
import {type PersonInter,type Persons} from '../types'  
//@代表直接定位到src目录，types后面不用再加/index.ts，默认找的就是index.ts

//定义一个变量person，符合PersonInter规范
//如果这里person里面的属性名或者类型不符合PersonInter规范，都会报错
// let person: PersonInter = {id:'dsd132213ds',name:'zhangsan',age:18}



let personList:Array<PersonInter> =
                [{id:'dsd132213ds',name:'zhangsan',age:18},
                {id:'dsd132213ds',name:'lisi',age:18},
                {id:'dsd132213ds',name:'wangwu',age:18}]
//定义了一个变量，是一个数组，数组里的每一个元素都是符合PersonInter规范的对象
//也可以在index.ts里定义一个数组规范，然后把数组里的每一个元素都符合PersonInter规范，
//let personList:Persons = ...


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



