import React, { Component, createRef } from 'react'

// 非受控组件--- input框自己的value状态不被react组件控制
export default class InputComponent2 extends Component {
    msgRef = createRef() //创建了一个存放DOM的容器

    changeHandler = () => {
        console.log(this.msgRef.current.value)
    }


    render() {
        return (
            <div>
                <input type="text" ref={this.msgRef} />
                <button onClick={this.changeHandler}>提交</button>
            </div>
        )
    }
}
