<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">    修改年龄</button>
        <button @click="showTel">    查看联系方式</button>
        <hr>
        <h2>测试：{{ a }}</h2>
        <button @click="b">测试</button>
    </div>
</template>

<script lang="ts">
    export default{
        name:'Person',
        data(){
            return {
                a:100
            }
        },
        methods:{
            b(){
                console.log('b')
            }
        },    //vue2的语法和可以vue3语法共存，效果都生效，data里可以用this.访问setup的数据，反过来不行，但是不建议混用，原因详见MD文档
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
            return {name,age,changeName,changeAge,showTel}  //setup返回对象
            
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