import React, {Component} from 'react'
import ReduxCount from './redux-src/components/Count'
import ReactReduxCount from './react-redux-src/containers/Count'
import ReactReduxPerson from './react-redux-src/containers/Person'
import store from './react-redux-src/redux/store'

export default class App extends Component{
    render(){
        return (
            <div>
                <h2>以下是 redux 的 demo:</h2>
                <ReduxCount/>
                <div style={{height:100}} />
                <h2>以下是 react-redux 的 demo:</h2>
                {/* 这里 store 就是这样传的,父类中通过 props 的方式传递给子类, 
                子类中可以通过 this.props.key 来获取对应的状态 */}
                {/* <ReactReduxCount store={store}/> */}
                {/* 如果有很多个组件都需要用到 store ,这个时候每个组件都传一遍 store,显然比较麻烦,这个时候就可以用 Provider,
                 将所有用的 store 的组件都用 Provider 包裹住,让其成为Provider 的子孙组件,这样子孙组件都可以取到 store,而不用每个都传*/}
                <ReactReduxCount/>
                <hr/>
				<ReactReduxPerson/>
            </div>
        )
    }
}