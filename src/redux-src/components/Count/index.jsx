
import React,{Component} from 'react'
// 引入 store ,用于获取 redux 中保存的状态
import store from '../../redux/store'
//引入actionCreator，专门用于创建action对象
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'

export default class Count extends Component {

    componentDidMount(){
        // 监听到 store 中状态的改变后,让组件重新渲染, 这里我们也可以在根组件中监听
        // 如果在跟组件中将会从新渲染整个跟组件,这里跟组件是 App,如果在 App 中监听,将会刷新整个 App
        store.subscribe(()=>{
            this.setState({})
        })
    }

    increment = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value*1))
    }

    decrement = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction)
    }

    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const count = store.getState()
        if(count %2 !== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch(createIncrementAsyncAction(value*1))
        }, 500);
    }

    render(){
        return (
            <div>
                <h4 style={{color:'red'}}>当前求和为:{store.getState()}</h4>
                <select ref={c=>this.selectNumber=c}>
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