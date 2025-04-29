<template> 
    <div>
        <!--<h2 id="title2">嘿嘿</h2>  -->
        <h2 ref="title2">嘿嘿</h2>
        <button @click="showLog">点我输出app的h2</button>
        <Person/>
    </div>
</template>

<script lang="ts" setup name="App">  
import Person from "./components/Person.vue"  //不需要再components:{Person}注册了，因为vue3的setup自动返回里面的组件，这里已经引入了Person，就会被return

import { ref } from 'vue'

let title2 = ref()
    
function showLog(){
    console.log(title2.value)
}
</script>

