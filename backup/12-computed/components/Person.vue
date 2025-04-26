<template>
    <div class="person">
        姓：<input type="text" v-model="firstName">   
        <!-- 不能写value="{{ firstName.value }}"，{{  }}插值语法是用于文本内容动态渲染，不能直接作用于属性 -->
         <!-- v-bind:value="firstName"只能把firstName绑定到value（默认值）上，二不能把input输入的内容回绑到firstName上，要用v-model:value1(简写v-model)双向绑定 -->
        <br>
        名：<input type="text" v-model="lastName">
        <br>
        <!-- 全名：<span>{{firstName}}-{{ lastName }}    //这样写太繁琐</span> -->    
        全名：<span>{{ fullName }}</span><br>
        全名：<span>{{ fullName }}</span><br>
        全名：<span>{{ fullName2() }}</span><br>
        全名：<span>{{ fullName3 }}</span><br>
        <button @click="changeFullname3()">修改fullName</button>
        

    </div>
</template>



<script lang="ts" setup name='Person'>
import { ref, computed } from 'vue'
let firstName = ref('张')
let lastName = ref('三')

let fullName = computed(() => {
    return firstName.value + '-' + lastName.value
})
//computed是有缓存的，当你在模板多次使用computed时，会缓存，不会每次都重新计算，只有当依赖的数据发生变化时才会重新计算

let fullName2 = function fullName2(){
    return firstName.value + '-' + lastName.value
}
//自己定义的这个方法是没有缓存的，且在模板需要调用{{fullName()}}


//上述定义fullName是只读的
// function changeFullname(){
//     fullName.value = '李-四'  //不能这样写，因为fullName.value是只读的,只能通过调用firstName.value和lastName.value修改
// }

//可写可读定义computed
let fullName3 = computed({
    get(){                                                        //读取fullName3的值的时候，会调用get方法
        return firstName.value + '-' + lastName.value    
    },
    set(value){                                                    //修改fullName3的值的时候，会调用set方法
        let arr = value.split('-')
        firstName.value = arr[0]
        lastName.value = arr[1]
    }
})
function changeFullname3(){
    fullName3.value = '李-四'   //修改fulName3的值的时候，会调用set方法，在set方法里把firstName和lastName的值也修改了。注意！所有用到firstName和lastName的值都会改
}

 
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



