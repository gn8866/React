import React from 'react'

import Item from './Item'
import Counter from './Counter'

export default class PageA extends React.Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div>
        <h1>PageA</h1>
        <Item />
        <Counter />
      </div>
    )
  }
}