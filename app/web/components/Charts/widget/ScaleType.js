import React, { Component } from 'react';
import { Radio } from 'antd';

export default class ScaleType extends Component {
  constructor() {
    super()
    this.state = {
      options: [
        {title: 'Line', value: 'value'},
        {title: 'Log', value: 'log'}
      ]
    }
  }
  render() {
    const { value, onChange } = this.props
    const { options } = this.state
    return (
      <Radio.Group value={value} buttonStyle="solid" onChange={onChange} size="small">
        {
          options.map((option, key) => (
            <Radio.Button value={option.value} key={key}>{option.title}</Radio.Button>
          ))
        }
      </Radio.Group>
    )
  }
}