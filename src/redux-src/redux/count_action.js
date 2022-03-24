/* 
	该文件专门为Count组件生成action对象
*/
// 导入需要的常量类型字符串
import {INCREMENT,DECREMENT} from './constant'

// 对于每个action 会接收一个需要处理的数据 data,然后返回一个 action 对象,这中 action 我们称为同步action
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})
// 异步 action, 就是指 action 的值为函数,异步 action 中一般都会调用同步 action,

export const createIncrementAsyncAction = (data,time) => {
    // 异步 action 返回的函数redux 框架会把dispatch给我们传过来,这样我们就不需要再使用 store.dispatch 了,其实两者是同一个
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(createIncrementAction(data))
		},time)
	}
}