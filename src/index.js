import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
import store from './react-redux-src/redux/store' // 整个应用只有一个 store
import {Provider} from 'react-redux'

// ReactDOM.render(<App/>, document.getElementById('root'))

// 如果使用的是 redux, 则需要监听; 如果使用的是 react-redux,则不需要下面的监听,因为 connect 内部帮我们做了
//监听 store 中状态的改变,没次监听到改变后,重新渲染 App,
// 这里也可以放到每个组件中分别调用,不过会比较麻烦,但优点是只会重新渲染相关的组件,而不是渲染整个页面
// store.subscribe(()=>{
//     ReactDOM.render(<App/>, document.getElementById('root'))
// })


// 有时候很多组件都需要用到 store,但每个组件都传一遍太麻烦,这个时候就可以用Provider,将所有用到 store 的子组件或其父组件用 Provider 包裹,
// 被 Provider 包裹的子组件或孙组件就能取到 store 了
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)
