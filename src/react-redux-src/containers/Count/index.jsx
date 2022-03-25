import React, { Component } from 'react'

import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


//定义UI组件
class Count extends Component {

	increment = ()=>{
		const {value} = this.selectNumber
		this.props.increment(value*1)
	}
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.decrement(value*1)
	}
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.increment(value*1)
		}
	}
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.incrementAsync(value*1,500)
	}

	render() {
		return (
			<div>
				<h2>我是Count组件,下方组件总人数为:{this.props.personCount}</h2>
				<h4>当前求和为：{this.props.count}</h4>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}

/* 
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
// function mapStateToProps(state){
//     return {count:state} // UI 中可以通过 this.props.count 来获取 count 的值
// }

/*  
    mapDispatchToProps的一般写法
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
// function mapDispatchToProps(dispatch){
//     return {
//         jia:number => dispatch(increment(number)),
// 		jian:number => dispatch(decrement(number)),
// 		jiaAsync:(number,time) => dispatch(incrementAsync(number,time)),
//     }
// }


//使用connect()()创建并暴露一个Count的容器组件,connect接收两个参数
// 1. 第一个参数是一个函数, 接收 store 传过来的状态,并返回一个对象,对象里的 value 值就是状态
// 2. 第二个参数也是一个函数, 接收 store.dispatch,并返回一个对象,对象里的 value 值就是操作状态的方法
// export default connect(mapStateToProps,mapDispatchToProps)(Count)

/*
    上面是connect的一般写法.
    下面是connect的简写:
    1. mapStateToProps 拿出来直接传给 connect
    2. mapDispatchToProps 该写成一个字典,省去 dispatch 的操作,这里是 react-redux 底层帮我去做了,
       只要我们传入的对象的 value 是一个 action 对象,底层自动帮我们 dispatch
 */
export default connect(
    state => ({ // 这里组件中用到哪些状态,就映射哪些状态
		count:state.count,
		personCount:state.persons.length
	}),
    {increment,decrement,incrementAsync}
)(Count)