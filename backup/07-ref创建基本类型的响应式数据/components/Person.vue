<template>
    <div class="person">
        <h2>姓名:{{ usrname }}</h2>  
        <!--//usrname和age有改动，需要是响应式，address没改动，不需要是响应式-->                           
        <h2>年龄:{{ age }}</h2>                                 
        <h2>地址:{{ address }}</h2>                             
        <button @click="changeName">  修改名字</button>     
        <button @click="changeAge">    修改年龄</button>    
        <button @click="showTel">    查看联系方式</button>
        

       
    </div>
</template>



<script lang="ts" setup name='Person'>
    import { ref } from 'vue'   //你要把什么数据改成响应式，就用ref（）处理一下
    //data
    let usrname =ref('张三')   
    let age = ref(18)
    let tel ='13888888888'
    let address = '江西南昌'

    //方法
    function changeName(){
    usrname.value='zhangsan'    
    }
    function changeAge(){
    age.value +=1 
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