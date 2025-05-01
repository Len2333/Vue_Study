import {reactive,onMounted} from 'vue'
import axios from 'axios'


export default function(){  //默认暴露，后面直接跟值，可是函数，也可是想暴露的别的东西。默认暴露只有一个接口，自动绑定.default，调用时可以自定义名字（重命名），都是绑定的这个.default

    let dogList = reactive([''])
    async function getDog(){
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            console.log(result.data.message)   //data是返回的数据，是以对象形式包裹的，里面有message key，value是图片地址
            dogList.push(result.data.message)  //将图片地址添加到dogList数组中
        } catch (error) {   
            //erro是一个错误对象，axios发请求时，会把所有请求错误的详细信息包装在一个对象里
            alert(error)
            //输出error提示一下
        }
    }

    //钩子
    onMounted(()=>getDog())

    //向外部提供东西
    return {
        dogList,
        getDog
        //返回一个值和一个方法
}
}