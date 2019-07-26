import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import lodash from  'lodash';
import moment from 'moment';

export default class LinRegChart extends Component {

  static propTypes = {
    paddingLeft: PropTypes.number,
    paddingTop: PropTypes.number,
    paddingBottom: PropTypes.number,
    tickSplit: PropTypes.number,
    height: PropTypes.number,
    yAxisDatas: PropTypes.array.isRequired,
    data_zoom_start: PropTypes.number.isRequired,
    data_zoom_end: PropTypes.number.isRequired,
    end_date: PropTypes.object.isRequired,
    start_date: PropTypes.object.isRequired,
    onZoomChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    height: 700,
    tickSplit: 8,
    paddingLeft: window.innerWidth <= 768 ? 10 : 160,
    paddingTop: 40,
    paddingBottom: 60,
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
    const { data_zoom_start, data_zoom_end, start_date, end_date, tickSplit, colors, yAxisDatas, paddingLeft, paddingTop, paddingBottom, scaleType, legend } = props;

    const yAxis= [];
    const series = [];
    const selected = {};

    if (!yAxisDatas.length) {
      return false
    }
    yAxisDatas.forEach((item, index) => {
      selected[item.name] = !item.unselected;
      series.push({
        ...item,
        type: 'line',
        symbol: 'none',
        xAxisIndex: 0,
        yAxisIndex: _.isNumber(item.yAxisIndex) ? item.yAxisIndex : index,
        smooth: true,
      })
      if (yAxis[item.yAxisIndex]) {
        return
      }
      yAxis.push({
        type: item.scaleType || scaleType || 'value',
        logBase: item.logBase || 2,
        name: item.axisName || item.name,
        nameGap: 10,
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
            if (typeof item.formatter === 'function') {
              return item.formatter(value);
            }
            return this.conver(value);
          }
        },
        splitLine: {
          show: yAxis.length === 0,
          lineStyle: {
            color: '#313547'
          }
        },
      });
    });

    this.charts.setOption({
      grid: {
        left: paddingLeft,
        top: paddingTop,
        bottom: paddingBottom,
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
        showContent: true,
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
          dataBackground: {
            lineStyle: {
              color: '#dedede',
            }
          },
          borderColor: '#515153',
          showDetail: false,
          fillerColor: 'rgba(160,160,160,.15)',
        }
      ],
      color: colors,
      textStyle: {
        color: '#dedede',
      },
      legend: {
        show: true,
        inactiveColor: '#666',
        textStyle: {
          color: '#dedede',
        },
        ...legend,
        selected: this.selected || selected,
      },
      xAxis: [
        {
          type: 'time',
          axisTick: {
            alignWithLabel: true
          },
          splitLine: {
            show: false
          },
        }
      ],
      yAxis,
      series
    });
  }

  resizeChart = () => {
    this.charts.resize();
  }

  componentDidMount() {
    this.charts = echarts.init(this.container);
    this.updateChart(this.props);

    this.charts.on('datazoom', (params) => {
      let start = 0;
      let end = 0;

      if (params.batch && params.batch.length > 0) {
        const range = this.props.end_date - this.props.start_date
        start = (params.batch[0].startValue - this.props.start_date) / range * 100;
        end = (params.batch[0].endValue - this.props.start_date) / range * 100;
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
    this.charts.on('legendselectchanged', e => {
      this.selected = e.selected
    })
    window.addEventListener('resize', this.resizeChart);
  }

  componentWillUnmount() {
    this.charts.dispose();
    window.removeEventListener('resize', this.resizeChart);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.start_date !== nextProps.start_date
      || this.props.end_date !== nextProps.end_date
      || this.props.data_zoom_end !== nextProps.data_zoom_end
      || this.props.data_zoom_start !== nextProps.data_zoom_start
      || this.props.scaleType !== nextProps.scaleType
      || this.props.up !== nextProps.up
      || this.props.down !== nextProps.down
      || this.props.count !== nextProps.count
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
