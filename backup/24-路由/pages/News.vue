<template>
  <div class="news">
      <ul>
          <li><RouterLink to="/news/001">新闻001</RouterLink></li>
          <li><RouterLink to="/news/002">新闻002</RouterLink></li>
          <li><RouterLink to="/news/003">新闻003</RouterLink></li>
          <li><RouterLink to="/news/004">新闻004</RouterLink></li>
      </ul>
  </div>
</template>

<script setup lang="ts"name="News">

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
    list-style: none;
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