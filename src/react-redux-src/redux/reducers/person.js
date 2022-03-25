import {ADD_PERSON} from '../constant'

const initState = [{id:'001',name:'tom',age:18}]

// reducer 是一个纯函数
export default function personReducer(preState=initState,action){
    const {type,data} = action
    switch(type) {
        case ADD_PERSON:
            //preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
            //redux 会检测返回的值和前一个值是否是同一个,如果是同一个就不会触发更新了,所以这里不能用上面的写法
            return [data,...preState]
        default: 
            return preState
    }
}