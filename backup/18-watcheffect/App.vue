<template> 
    <Person/>
</template>

<script lang="ts" setup name="App">  
    import Person from "./components/Person.vue";  //不需要再components:{Person}注册了，因为vue3的setup自动返回里面的组件，这里已经引入了Person，就会被return

    
   
</script>

