<template>
    <div class="person">
        <h2>初始{{ sum }},放大10倍{{ bigSum }}</h2>
        <button @click="add">+</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index" >
        <button @click="getDog">来一只狗</button>
    </div>
</template>

<script lang="ts" setup name='Person'>
import useDog from '../hooks/useDog';   //相当于import {default:useDog} from '@/hooks/useDog';
import {useSum} from '../hooks/useSum';

let {sum,add,bigSum} = useSum();
let {dogList,getDog} = useDog();
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
    img{
        width: 100px;
    }
</style>



