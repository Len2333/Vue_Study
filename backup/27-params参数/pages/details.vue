<template>
    <ul class="news-list">
      <li>{{params.id}}</li>
      <li>{{params.title}}</li>
      <li>{{params.content}}</li>
      <!-- 注意这里的参数名和路由里占位的参数名一致 -->
    </ul>


</template>
  
<script setup lang="ts" name="Details">
 import { useRoute} from 'vue-router'
 import { toRefs } from 'vue'
 const  route = useRoute()
 console.log('@',route)
 const {params} = toRefs(route)
 console.log('@',params)
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