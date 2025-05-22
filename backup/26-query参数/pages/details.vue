<template>
    <ul class="news-list">
      <li>编号：{{query.id}}</li>
      <li>标题：{{query.title}}</li>
      <li>内容：{{query.content}}</li>
    </ul>


</template>
  
<script setup lang="ts" name="Details">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
let route = useRoute()
console.log(route) //控制台看看这个对象是什么,可以看到里面有个query对象，值就是{参数名：参数值,...,参数名：参数值}
const {query} = toRefs(route)  //从route解构赋值query的值，注意虽然route是响应式的，但解构的query不是，所以要使用toRefs转换，不然会出现query在变，页面上渲染的值不变


</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }
  
  .news-list>li {
    line-height: 30px;
  }
</style>