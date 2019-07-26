import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import lodash from  'lodash';
import moment from 'moment';

export default class ExponentChart extends Component {

  static propTypes = {
    paddingLeft: PropTypes.number,
    paddingTop: PropTypes.number,
    tickSplit: PropTypes.number,
    height: PropTypes.number,
    xAxisDatas: PropTypes.array.isRequired,
    yAxisDatas: PropTypes.array.isRequired,
    data_zoom_start: PropTypes.number.isRequired,
    data_zoom_end: PropTypes.number.isRequired,
    end_date: PropTypes.object.isRequired,
    start_date: PropTypes.object.isRequired,
    onZoomChange: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired
  };

  static defaultProps = {
    height: 700,
    tickSplit: 8,
    paddingLeft: 160,
    paddingTop: 20
  };

  conver = (limit) => {
    let size = '';

    if (limit < 0.1 * 1024) {
      size = limit.toFixed(2);
    }
    else if (limit < 0.1 * 1024 * 1024) {
      size = (limit / 1024).toFixed(2) + 'K';
    }
    else if (limit < 0.1 * 1024 * 1024 * 1024) {
      size = (limit / (1024 * 1024)).toFixed(2) + 'M';
    }
    else {
      size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'G';
    }

    let sizestr = size + '';
    const len = sizestr.indexOf('\.');
    const dec = sizestr.substr(len + 1, 2);
    if (dec == '00') {
      return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
    }
    return sizestr;
  }

  updateChart = (props) => {
    const { data_zoom_start, data_zoom_end, start_date, end_date, tickSplit, colors, yAxisDatas, xAxisDatas, paddingLeft, paddingTop, scaleType } = props;

    const yAxis= [];
    const series = [];

    yAxisDatas.forEach((item, index) => {
      let max = 0;
      for (let i = Math.floor(item.data.length * data_zoom_start / 100); i <= Math.floor(item.data.length * data_zoom_end / 100); i++) {
        if (item.data[i] && item.data[i] > max) {
          max = item.data[i];
        }
      }
      series.push({
        type: 'line',
        name: item.name,
        symbol: 'none',
        xAxisIndex: 0,
        yAxisIndex: _.isNumber(item.yAxisIndex) ? item.yAxisIndex : index,
        smooth: true,
        lineStyle: {type: item.lineType || 'solid'},
        data: item.data
      })
      if (yAxis[item.yAxisIndex]) {
        return
      }
      yAxis.push({
        type: scaleType,
        name: item.name,
        nameLocation: 'center',
        nameGap: item.distance,
        position: item.position,
        offset: item.offset,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel : {
          margin: 0,
          formatter : (value) => {
            return this.conver(value);
          }
        },
        splitLine: {
          show: false
        },
        interval: Math.ceil(max / tickSplit)
      });
    });

    this.charts.setOption({
      grid: {
        left: paddingLeft,
        top: paddingTop
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            show: false
          }
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
          color: '#000',
          fontSize: 12
        },
        showContent: true
      },
      toolbox: {
        top: -100,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          }
        }
      },
      dataZoom: [
        {
          type: 'slider',
          show: true,
          start: data_zoom_start,
          end: data_zoom_end,
          showDetail: false
        }
      ],
      color: colors,
      legend: {
        show: true,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          splitLine: {
            show: false
          },
          min: start_date.format('YYYY-MM-DD'),
          max: end_date.format('YYYY-MM-DD'),
          data: xAxisDatas
        }
      ],
      yAxis,
      series
    });
  }

  componentDidMount() {
    this.charts = echarts.init(this.container);
    this.updateChart(this.props);

    this.charts.on('datazoom', (params) => {
      let start = 0;
      let end = 0;

      if (params.batch && params.batch.length > 0) {
        start = params.batch[0].startValue / this.props.xAxisDatas.length * 100;
        end = params.batch[0].endValue / this.props.xAxisDatas.length * 100;
      }
      else {
        start = params.start;
        end = params.end;
      }

      this.props.onZoomChange(start, end);
    });

    this.charts.dispatchAction({
      type: 'takeGlobalCursor',
      key: 'dataZoomSelect',
      dataZoomSelectActive: true
    });
  }

  componentWillUnmount() {
    this.charts.dispose();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.start_date !== nextProps.start_date
      || this.props.end_date !== nextProps.end_date
      || this.props.data_zoom_end !== nextProps.data_zoom_end
      || this.props.data_zoom_start !== nextProps.data_zoom_start
      || this.props.scaleType !== nextProps.scaleType
      || !lodash.isEqual(this.props.xAxisDatas, nextProps.xAxisDatas)
    ) {
      this.updateChart(nextProps);
    }
  }

  render() {
    const { height } = this.props;

    return (<div style={{height}} ref={ele => this.container = ele}/>)
  }
}
