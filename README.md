
### 什么是 Redux
1. redux 是专门用来做状态管理的 JS 库(不是 React 插件库)
2. 它可以在 react、angular、vue 等项目中使用,但基本与 react 配合使用
3. 集中管理 react 应用中多个组件共享的状态

什么情况下使用 redux
1.某个组件的状态,需要让其他组件可以随时拿到(共享)
2.一个组件需要改变另一个组件的状态(通信)
3.总体原则: 能不用就不用,如果不用比较吃力才考虑使用


              dispatch(action): 1.type: 动作类型标识(唯一)    previousState, action
                                2.data: 动作数据            -------------------->
Action Creators -------------------------------->  Store                         Reducers
       /|\                                            |    <--------------------
        |                                             |       return newState
        |                                             |  
        | do what ?                                   |  
        |                                             | getState()
        |                                             |
        |                                            \|/
        --------------------------------------- React Components

action:动作对象包含:type、data 两个属性
  type:标识属性,值是字符串, 唯一,必要
  data:数据属性,值是任意类型,可选

reducer:用于初始化状态、加工状态,加工时根据旧的 state 和 action 产生新的 state 的纯函数

store: 将 state、action、reducer 联系在一起的对象
如何得到此对象?
  1. import {createStore} from 'redux'
  2. import reducer from './reducers'
  3. const store = createStore(reducer)
此对象的功能  
  getState():得到 state
  dispatch(action):分发 action,触发 reducer 调用,产生新的 state
  subscribe(listener):注册监听,当产生了新的 state 时,自动调用

redux 只负责管理状态,至于状态的改变驱动页面的展示,需要我们自己写

Redux 安装 : yarn add redux

### react-redux
* react-redux 是 FaceBook 出的一个在 React 中使用 redux 管理状态的插件库

##### react-redux 模型图

      Count(容器组件)
  |-------------------------------------|
  |                                     |                         |---------------|
  |   |-------------------|  props      |     store.getState()    |               |
  |   |  Count(UI组件)     |<----------- |<----------------------- |               |  
  |   |                   |             |                         |   Redux       |
  |   |                   |   props     |------------------------>|               |
  |   |                   |------------>| store.dispatch(action)  |               |
  |   |-------------------|             |                         |---------------|
  |                                     |
  |--------------------------------------

1.所有的 UI 组件都应该包裹一个容器组件,他们是父子关系
2.容器组件是真正和 redux 打交道的,里面可以随意的使用 redux 的 api
3.UI 组件中不能使用任何 redux 的 api
4.容器组件会传给 UI 组件:redux 中所保存的状态、用于操作状态的方法
5.容器给 UI 传递 状态、操作状态的方法,均通过 props 传递

##### 安装 react-redux
* 终端执行 npm add react-redux