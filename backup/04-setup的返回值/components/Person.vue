<template>
    <div class="person">
        <h2>
            姓名:{{ name }}
        </h2>
        <h2>
            年龄:{{ age }}
        </h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">    修改年龄</button>
        <button @click="showTel">    查看联系方式</button>
    </div>
</template>

<script lang="ts">
    export default{
        name:'Person',
        setup(){
            //data
            let name ='张三'   //此时name不是响应式，下age、tel同
            let age ='18'
            let tel ='13888888888'

            //方法
            function changeName(){
                name='zhangsan'    //没有this关键字
            }
            function changeAge(){
                age +=1   //没有this关键字
            }
            function showTel(){
                alert(tel)
            }
            // return {name,age,changeName,changeAge,showTel}  //setup返回对象
            return function(){    //setup返回function会被 Vue 视为渲染函数，此时组件的 <template> 内容会被完全忽略。
                                  //渲染函数的返回值（如 '哈哈'）会直接作为组件的渲染结果，覆盖模板内容。               
                return '哈哈'     //在vue里面渲染函数优先级高于<template>
                                 //注意：渲染函数需要依赖 h（Vue 的虚拟 DOM 工厂函数），直接返回字符串 '哈哈' 会导致渲染结果仅为纯文本 哈哈，但技术上是可行的。

            }
        }
        
    }
</script>

<style>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;        
    }
    button{
        margin: 0 5px;
    }
</style>