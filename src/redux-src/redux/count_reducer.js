/*
    reducer 主要为组件服务,其本质是一个函数, 该函数接收两个参数,分别是:
    1.之前的状态preState:这个状态在第一次调用的时候是 undefined的,以后都是上一次状态的值,当然我们可以给其设置一个默认值,
    2.动作对象action: 这个 action 就是 store.dispatch 派发的 action 对象
    reducer 主要有两个作用:
    1.初始化状态
    2.加工状态
    reducer第一次被调用是 store 自动触发的,传递的 prestate 是 undefined,传递的 action 是{type:'redux 算法生成'}
*/
import {INCREMENT,DECREMENT} from './constant'
const initState = 0;
export default function countReducer(preState=initState, action){
    // 从 action 中获取 type 和 data
    const {type,data} = action
    // 根据 type 类型,加工数据
    switch (type){
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState
    }
}