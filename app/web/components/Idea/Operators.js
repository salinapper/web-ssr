import React, { Component } from 'react';
import { Button, Spin, message } from 'antd';
import { saveIdea } from '@/services/idea';
import { formatMessage } from 'umi/locale';
import { connect } from 'dva';

@connect(({ user }) => ({
  publishPermission: user.userInfo && user.userInfo.tradingview_publish
}))
class IdeaOperators extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      chartInfo: null
    }
  }

  saveIdea = async (widget, permission = 'private') => {
    const { chartInfo } = this.state
    if (!widget) {
      return message.error('Widget not ready')
    }
    const chartName = chartInfo ? chartInfo.name : window.prompt(formatMessage({id: 'idea.chartNamePrompt'}), '')
    if (!chartName) {
      return false
    }
    this.setState({
      loading: true
    });
    const screenshot = await this.takeScreenshot(widget)
    if (!screenshot) {
      this.setState({
        loading: false
      });
      return message.error('Failed')
    }
    widget.save(async state => {
      const info = {
        name: chartName,
        type: permission,
        screenshot,
        content: JSON.stringify(state),
        resolution: widget.chart().resolution(),
        symbol: widget.chart().symbol()
      }
      if (chartInfo && chartInfo.id) {
        info.id = chartInfo.id
      }
      const res = await saveIdea(info)
      this.setState({
        loading: false
      });
      if (res.status === 'Successful') {
        message.success('OK')
        this.setState({
          chartInfo: {
            ...info,
            id: info.id || res.data.id
          }
        })
      } else {
        message.error(res.msg)
      }
    })
  }

  createIdea = () => {
    const { widget } = this.props
    this.saveIdea(widget)
  }

  renameIdea = () => {
    const { widget } = this.props
    const { chartInfo } = this.state
    const chartName = window.prompt(formatMessage({id: 'idea.chartNamePrompt'}), chartInfo.name)
    if (chartName) {
      chartInfo.name = chartName
      this.saveIdea(widget)
    }
  }
  resaveIdea = () => {
    const { widget } = this.props
    const { chartInfo } = this.state
    const chartName = window.prompt(formatMessage({id: 'idea.chartNamePrompt'}), chartInfo.name)
    if (chartName) {
      chartInfo.name = chartName
      chartInfo.id = undefined
      this.saveIdea(widget)
    }
  }

  publishIdea = () => {
    const { widget } = this.props
    this.saveIdea(widget, 'public')
  }

  takeScreenshot = () => {
    const { widget } = this.props
    return new Promise(function (resolve) {
      widget.takeScreenshot()
      widget.subscribe('onScreenshotReady', resolve)
      setTimeout(function () {
        try {
          widget.unsubscribe('onScreenshotReady', resolve)
        } catch(e) {
        }
        resolve(false)
      }, 12000)
    })
  }

  render() {
    const { ready, publishPermission } = this.props
    const { loading, chartInfo } = this.state
    return (
      <Spin spinning={loading}>
        <div style={{marginBottom: '12px'}} >
          <Button onClick={this.createIdea} disabled={!ready} type="primary">{formatMessage({id: 'idea.save'})}</Button>&nbsp;
          { chartInfo && (
            <><Button onClick={this.resaveIdea}>{formatMessage({ id: 'idea.saveAs' })}</Button> &nbsp;</>
          )}
          { publishPermission && (
            <Button onClick={this.publishIdea} disabled={!ready}>{formatMessage({id: 'idea.publish'})}</Button>
          )}
        </div>
      </Spin>
    )
  }
}

export default IdeaOperators