import colors from './colors';
export default {
  colors,
  chart: {
      backgroundColor: '#050b20',
      borderWidth: 0,
      className: 'dark-container',
      plotBackgroundColor: 'rgba(255, 255, 255, .02)',
      plotBorderColor: 'rgba(255,255,255, .05)',
      plotBorderWidth: 1
  },
  title: {
      style: {
          color: '#C0C0C0',
          font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
      }
  },
  subtitle: {
      style: {
          color: '#666666',
          font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
      }
  },
  xAxis: {
      gridLineColor: '#333333',
      gridLineWidth: 1,
      labels: {
          style: {
              color: '#A0A0A0'
          }
      },
      lineColor: '#A0A0A0',
      tickColor: '#A0A0A0',
      title: {
          style: {
              color: '#CCC',
              fontWeight: 'bold',
              fontSize: '12px',
              fontFamily: 'Trebuchet MS, Verdana, sans-serif'

          }
      }
  },
  yAxis: {
      gridLineColor: '#333333',
      labels: {
          style: {
              color: '#A0A0A0'
          }
      },
      lineColor: '#A0A0A0',
      minorTickInterval: null,
      tickColor: '#A0A0A0',
      tickWidth: 1,
      title: {
          style: {
              color: '#CCC',
              fontWeight: 'bold',
              fontSize: '12px',
              fontFamily: 'Trebuchet MS, Verdana, sans-serif'
          }
      }
  },
  tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      style: {
          color: '#F0F0F0'
      }
  },
  toolbar: {
      itemStyle: {
          color: 'silver'
      }
  },
  plotOptions: {
      line: {
          dataLabels: {
              color: '#999'
          },
          marker: {
              lineColor: '#333'
          }
      },
      spline: {
          marker: {
              lineColor: '#333'
          }
      },
      scatter: {
          marker: {
              lineColor: '#333'
          }
      },
      candlestick: {
          lineColor: 'white'
      }
  },
  legend: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      itemStyle: {
          font: '9pt Trebuchet MS, Verdana, sans-serif',
          color: '#A0A0A0'
      },
      itemHoverStyle: {
          color: '#FFF'
      },
      itemHiddenStyle: {
          color: '#444'
      },
      title: {
          style: {
              color: '#C0C0C0'
          }
      }
  },
  credits: {
      style: {
          color: '#666'
      }
  },
  labels: {
      style: {
          color: '#666'
      }
  },

  navigation: {
      buttonOptions: {
          symbolStroke: '#DDDDDD',
          hoverSymbolStroke: '#FFFFFF',
          theme: {
              fill: '#555',
              stroke: '#000000'
          }
      }
  },

  // scroll charts
  rangeSelector: {
      buttonTheme: {
          fill: '#1e2236',
          stroke: '#000000',
          style: {
              color: '#CCC',
              fontWeight: 'bold'
          },
          states: {
              hover: {
                  fill: '#20283a',
                  stroke: '#000000',
                  style: { color: 'white' }
              },
              select: {
                  fill: '#0044d6',
                  stroke: '#000000',
                  style: { color: 'white' }
              }
          }
      },
      inputStyle: {
          backgroundColor: '#333',
          color: 'silver'
      },
      labelStyle: {
          color: 'silver'
      }
  },

  navigator: {
      handles: {
          backgroundColor: '#666',
          borderColor: '#666'
      },
      outlineColor: '#666',
      maskFill: 'rgba(16, 16, 16, 0.5)',
      series: {
          color: '#7798BF',
          lineColor: '#999'
      }
  },

  scrollbar: {
      barBackgroundColor: 'rgba(255,255,255,.1)',
      barBorderColor: '#999',
      buttonArrowColor: '#999',
      buttonBackgroundColor: '333',
      buttonBorderColor: '#333',
      rifleColor: '#222',
      trackBackgroundColor: '#222',
      trackBorderColor: '#666'
  }
};