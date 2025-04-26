<template>
    <div class="person">
        <h2>
            姓名:{{ name }}
        </h2>
        <h2>
            年龄:{{ age }}
        </h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <!--//@click是vue中的事件绑定方法，它是 v-on:click 的简写形式。这意味着当用户点击这个按钮时，会触发 showTel 方法。"showTel" 是你要调用的方法名，这里不需要加括号，除非你需要传递参数给这个方法-->
        <button @click="showTel">    查看联系方式</button>
    </div>
</template>

<script lang="ts">
    export default{
        name:'Person',
        data(){                      //这是响应式api，修改数据直接赋值即可，自动触发视图更新。this.name='李四'
            return{
                name:'张三',
                age:18,
                tel:'12345678910'
            }
        },
        methods:{
            showTel(){
                alert(this.tel)   // 使用 this 关键字来访问组件实例的数据属性 tel。这是因为 data 函数返回的对象中的属性都成为了组件实例的属性，可以通过 this 访问。
            },
            changeName(){
                this.name='zhang-san'
            },
            changeAge(){
                this.age += 1
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