<template>
    <div class="person">
        <h2>姓名:{{ usrname }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">  修改名字</button>
        <button @click="changeAge">    修改年龄</button>
        <button @click="showTel">    查看联系方式</button>
        

       
    </div>
</template>

<!-- <script lang="ts">
    export default {
    name: 'Person',    // 使用双引号（或保持单引号一致
}                   // 闭合括号与起始位置对齐
</script> -->

<script lang="ts" setup name="Person">
    
    //data
    let usrname ='张三'   
    let age = 18
    let tel ='13888888888'
    let address = '江西南昌'

    //方法
    function changeName(){
    usrname='zhangsan'    
    }
    function changeAge(){
    age +=1 
    console.log(1)  
    }
    function showTel(){
    alert(tel)
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