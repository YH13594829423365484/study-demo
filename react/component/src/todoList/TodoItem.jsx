import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <ul>
        <li>
          <span>html</span>
          <button>x</button>
        </li>
        <li>
          <span>css</span>
          <button>x</button>
        </li>
      </ul>
    )
  }
}
