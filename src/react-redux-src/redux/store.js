/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入createStore,专门用于创建 redux 中最为核心的 store 对象
import {createStore,applyMiddleware} from 'redux'
//引入汇总之后的reducer
import reducer from './reducers'
// 引入 redux-thunk,用于支持异步 action, 首先需要在终端执行 npm add redux-thunk 命令 添加thunk
import thunk from 'redux-thunk'
// 创建并暴露 store, createStore调用是需要传入一个为其服务的 reducer
// 如果需要使用异步 action 还需要传入applyMiddleware(),
// 如果不需要异步的 action 就不用导入applyMiddleware和 thunk
// 如果有多个组件共享状态,我们需要将多个 reducer 合并成一个对象
export default createStore(reducer,applyMiddleware(thunk))