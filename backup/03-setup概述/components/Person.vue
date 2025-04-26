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
            return {name,age,changeName,changeAge,showTel}
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