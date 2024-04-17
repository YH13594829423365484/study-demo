import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  state = {
    list: ['html', 'css']
  }

  render() {
    return (
      <div>
        <header>
          <input type="text" />
          <button>提交</button>
        </header>
        <section>
          <TodoItem/>
        </section>
      </div>
    )
  }
}
