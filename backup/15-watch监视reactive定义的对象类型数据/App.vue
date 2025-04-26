<template> 
    <Person/>
</template>

<script lang="ts">  
    import Person from "./components/Person.vue";
    
    export default{    //不是函数，是导出语句
        name:"App",     //组件名
        components:{Person}
    }
</script>

