<template> 
    <div class="app">
        <h2 class="title">vue路由测试</h2>
        <!-- 导航区 -->
        <div class="navigate">
          <!-- routerlink和to、active-class的搭配是设计好的，to指点击跳转，active-class指激活时的类名 -->
            <RouterLink to="/home" active-class="active">首页</RouterLink>
            <RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
            <RouterLink v-bind:to="{path:'/about'}" active-class="active">关于</RouterLink>

        </div>

        <!-- 展示区 -->
        <div class="main-content">
          <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">  
import { RouterView,RouterLink } from 'vue-router'

</script>


<style scoped>
/* 基础容器样式 */
.app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: #f5f7fb;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

/* 标题样式 */
.title {
  text-align: center;
  color: #2c3e50;
  font-size: 2.4rem;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  background: linear-gradient(90deg, #3498db 0%, #8e44ad 100%);
}

/* 导航容器样式 */
.navigate {
  background: white;
  border-radius: 12px;
  padding: 1.2rem;
  margin: 0 auto 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  gap: 1.5rem;
  align-items: center;
}

/* RouterLink 渲染的 <a> 标签样式（使用 :deep() 穿透作用域） */
.navigate :deep(a) {
  text-decoration: none;
  color: #4a5568;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  position: relative;
}

/* 悬停效果 */
.navigate :deep(a:hover) {
  background: #f8fafc;
  color: #3498db;
  transform: translateY(-2px);
}

/* 悬停时的装饰图标 */
.navigate :deep(a:hover::before) {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: #3498db;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* 激活状态样式（对应 active-class="active"） */
.navigate :deep(a.active) {
  background: #3498db;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(52, 152, 219, 0.3);
}

/* 激活状态的装饰点 */
.navigate :deep(a.active::after) {
  content: '';
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: #3498db;
  border-radius: 50%;
  animation: bounce 1s infinite;
}

/* 内容区域样式 */
.main-content {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  min-height: 400px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: box-shadow 0.3s ease;
}

.main-content:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* 动画效果 */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* 响应式设计：小屏设备 */
@media (max-width: 768px) {
  .navigate {
    flex-direction: column;
    width: 100%;
  }

  .navigate :deep(a) {
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .navigate :deep(a:hover) {
    transform: none;
  }
}
</style>