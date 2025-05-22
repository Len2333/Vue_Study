<template>
  <div class="news">
      <!-- 导航区，展示了4个新闻标题 -->
      <ul>
       <li v-for="news in newsList" :key="news.id">
        <!-- ``的作用是把里面的内容变成模板字符串，可以用${}嵌入变量或表达式（如下）,并进行解析，其他部分还是字符串。也可用+拼接变量，如:to="'/news/detail?id=' + news.id" -->
        <!-- 写法一： -->
        <!-- <RouterLink :to="`/news/details?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->
      
        <!-- 写法二： VUE可以识别path和query，并按照路径和参数进行处理-->
        <RouterLink 
        :to="{ path: '/news/details', 
               query: 
               { id: news.id, 
                 title: news.title, 
                 content: news.content 
                } 
              }">
              {{ news.title }}
            </RouterLink>
      </li>
      </ul>
      <!-- 展示区 -->
      <div class="news-content">
        <RouterView></RouterView>
      </div>
  </div>
</template>

<script setup lang="ts"name="News">
  import { reactive } from 'vue';
  import { RouterView, RouterLink} from 'vue-router';


  const newsList = reactive([
    { id: '001', title: '抗癌食物',content:'西兰花' },
    { id: '002', title: '如何一夜暴富' ,content:'学it'},
    { id: '003', title: '震惊！万万没想到',content:'明天是周一' },
    { id: '004', title: '好消息好消息',content:'没有坏消息就是好消息' }
  ])

</script>

<style scoped lang="scss">
.news {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  
  ul {
    //list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 1rem;
      transition: transform 0.2s ease;
      
      &:hover {
        transform: translateX(8px);
      }
      
      a {
        text-decoration: none;
        color: #333;
        font-size: 1.1rem;
        padding: 0.5rem 0;
        display: block;
        border-radius: 4px;
        
        &:hover {
          background-color: #e0e0e0;
          color: #007bff;
        }
        
        &.router-link-exact-active {
          color: #fff;
          background-color: #007bff;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .news {
    padding: 1rem;
    
    ul li a {
      font-size: 1rem;
    }
  }
}
</style>