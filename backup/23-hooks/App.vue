<template> 
    <Person v-if="ishow"/>
    <h2>父组件</h2>
</template>

<script lang="ts" setup name="App">  
import Person from "./components/Person.vue"  
import { ref ,onBeforeMount,onMounted} from "vue"
let ishow = ref(true)
onBeforeMount(()=>{console.log('父组件挂载前')})
onMounted(()=>{console.log('父组件挂载后')})
</script>


<!-- 
vue3解析流程
1、vue3入口在index.html里，引入了main.ts
2、main.ts从App.vue引入了App组件创建app实例，并挂载到html的#app节点 
3、到App.vue解析这个组件
4、App.vue解析过程：发现<template> 有person，先把person整个解析完，再开始解析App自己
 -->
