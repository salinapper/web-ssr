import React, { Component } from 'react';
import { InputNumber, Button } from 'antd';
import { formatMessage } from 'umi/locale';
import styles from './index.less';

export default class ScaleType extends Component {
  constructor() {
    super()
    this.state = {
      up: 0,
      down: 0,
      count: 0,
    }
  }
  upChange = (value) => {
    this.setState({up: +value})
  }
  downChange = (value) => {
    this.setState({down: +value})
  }
  countChange = (value) => {
    this.setState({count: +value})
  }
  render() {
    const { up, down, count, onChange } = this.props
    return (
      <div className={styles.linregWrap}>
        <div className={styles.formItem}>
          <label>{ formatMessage({id: 'charts.linreg.up'}) }</label>
          <InputNumber style={{width: '80px'}} min={0.5} max={5} value={this.state.up || up} onChange={this.upChange} size="small" />
        </div>
        <div className={styles.formItem}>
          <label>{ formatMessage({id: 'charts.linreg.down'}) }</label>
          <InputNumber style={{width: '80px'}} min={0.5} max={5} value={this.state.down || down} onChange={this.downChange} size="small" />
        </div>
        <div className={styles.formItem}>
          <label>{ formatMessage({id: 'charts.linreg.count'}) }</label>
          <InputNumber style={{width: '80px'}} min={10} max={3650} value={this.state.count || count} precision={0} onChange={this.countChange} size="small" />
        </div>
        <Button onClick={() => onChange({up: this.state.up || up, down: this.state.down || down, count: this.state.count || count})} size="small" type="primary">{formatMessage({id: 'form.save'})}</Button>
      </div>
    )
  }
}