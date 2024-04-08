import React, { Component } from 'react'

//受控表单组件 --- input框自己的value状态受react组件控制
export default class InputComponent extends Component {
  state={
    message:'床前明月光'
  }

  changeHandler=(e)=>{
    this.setState({
      message:e.target.value
    })
  }

    render() {
    return (
      <div>
        <input type="text" value={this.state.message}
        onChange={this.changeHandler} />
      </div>
    )
  } 
}
