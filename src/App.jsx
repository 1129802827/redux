import React, {Component} from 'react'
import ReduxCount from './redux-src/components/Count'

export default class App extends Component{
    render(){
        return (
            <div>
                <h2>以下是 redux 的 demo:</h2>
                <ReduxCount/>
                <div style={{height:100}} />
                <h2>以下是 react-redux 的 demo:</h2>
            </div>
        )
    }
}