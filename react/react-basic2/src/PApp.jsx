import React, { Component } from 'react'
import PChild from './components/PChild'

export default class PApp extends Component {

    callback=(newMsg)=>{
        console.log(newMsg);
    }

  render() {
    return (
      <div>
        <h2>父组件</h2>
        <PChild cb={this.callback}></PChild>
      </div>
    )
  }
}
