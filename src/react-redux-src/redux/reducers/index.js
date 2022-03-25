/* 
	该文件用于汇总所有的reducer为一个总的reducer
*/
//引入combineReducers，用于汇总多个reducer
import {combineReducers} from 'redux'
//引入为Count组件服务的reducer
import count from './count'
//引入为Person组件服务的reducer
import persons from './person'

//汇总所有的reducer变为一个总的reducer,
export default  combineReducers({
	// 这里使用的是对象的简写方式, 这个对象就是保存的全局的 state,
	// 在使用的时候就可以通过 state.count 或 state.persons获取响应的状态
	count, 
	persons
})
