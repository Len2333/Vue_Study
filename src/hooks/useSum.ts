import {ref,computed,onMounted} from 'vue'



export function useSum(){    //命名暴露，调用时需要解构赋值，把特定名字函数的返回值解构出来

let  sum = ref(0)
let  bigSum = computed(()=>sum.value*10)
function add(){
    sum.value += 1
}

//钩子，挂载前执行
onMounted(()=>add())

return{
    sum,  
    add,
    bigSum
    //返回一个值和一个方法g和一个计算属性
}

}