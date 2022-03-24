import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
// import store from './redux-src/redux/store'

ReactDOM.render(<App/>, document.getElementById('root'))

//监听 store 中状态的改变,没次监听到改变后,重新渲染 App,
// 这里也可以放到每个组件中分别调用,不过会比较麻烦,但优点是只会重新渲染相关的组件,而不是渲染整个页面
// store.subscribe(()=>{
//     ReactDOM.render(<App/>, document.getElementById('root'))
// })