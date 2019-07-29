import _ from 'lodash'
import moment from 'moment';
import datafeed from './datafeed';
import { regression } from 'echarts-stat';
import { parse, stringify } from 'qs';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
const externalModule = {}

export function isUrl(path) {
  return reg.test(path);
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}

export function leftpad(num) {
  return num > 9 ? num : '0' + num;
}

export function getScript(source, key) {
  if (key && externalModule[key]) {
    // 缓存机制
    return externalModule[key]
  }
  const loader = new Promise((resolve, reject) => {
    let script = document.createElement('script')
    const prior = document.getElementsByTagName('script')[0]
    script.async = 1
    prior.parentNode.insertBefore(script, prior)
    const onchange = function (_, isAbort) {
      if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
        script.onload = null
        script.onreadystatechange = null
        script = undefined
        if (!isAbort) {
          resolve(window[key])
        }
      }
    }
    script.onreadystatechange = onchange
    script.onload = onchange
    script.onerror = reject
    script.src = source
  })
  if (key) {
    externalModule[key] = loader
  }
  return loader
}

export function getDefaultTimezone() {
  const offset = new Date().getTimezoneOffset() / (-60)
  switch (offset) {
    case 0:
      return 'utc'
    case 1:
      return 'Europe/London'
    case 2:
      return 'Europe/Paris'
    case 3:
      return 'Europe/Athens'
    case 4:
      return 'Asia/Dubai'
    case 5:
      return 'Asia/Ashkhabad'
    case 6:
      return 'Asia/Almaty'
    case 7:
      return 'Asia/Bangkok'
    case 8:
      return 'Asia/Shanghai'
    case 9:
      return 'Asia/Tokyo'
    case 10:
      return 'Australia/Sydney'
    case -10:
      return 'Pacific/Honolulu'
    case -7:
      return 'America/Los_Angeles'
    case -5:
      return 'America/Bogota'
    case -4:
      return 'America/Toronto'
    case -3:
      return 'America/Sao_Paulo'
    default:
      return ''
  }
}

export function getStaticPath() {
  return process.env.NODE_ENV === 'development'
    ? '/'
    : '/static/'
}

export async function getTradingViewWidget(config) {
  const staticPath = getStaticPath()
  const defaultConfig = {
    debug: false,
    symbol: 'BTCUSD',
    interval: 'D',
    container_id: 'tv_chart_container',
    datafeed,
    library_path: staticPath + 'tradingview/charting_library/',
    locale: 'en',
    timezone: getDefaultTimezone(),
    disabled_features: [
      'use_localstorage_for_settings',
      'header_saveload'
    ],
    enabled_features: [],
    indicators_file_name: staticPath + 'tradingview/study.js',
    charts_storage_url: '/api/saveload',
    charts_storage_api_version: '1.1',
    client_id: location.origin,
    user_id: 'public_user_id',
    autosize: true,
    theme: 'dark',
    custom_css_url: 'custom.css'
  }
  await getScript(staticPath + 'tradingview/charting_library/charting_library.min.js')
  config = _.assign(defaultConfig, config)
  return new TradingView.widget(config);
}

export function calcZoom(start, end, range_start, range_end) {
  return {
    data_zoom_start: (start - range_start) / (range_end - range_start) * 100,
    data_zoom_end: (end - range_start) / (range_end - range_start) * 100,
    active_zoom: calcActiveZoom(start, end, range_start, range_end),
  }
}
export function calcActiveZoom(start, end, range_start, range_end) {
  const duration = moment.duration(end - start)
  if (duration.asDays() === 30) {
    return '1m'
  }
  if (duration.asDays() === 90) {
    return '3m'
  }
  if (duration.asDays() === 182) {
    return '6m'
  }
  if (moment.utc().startOf('year').isSame(start)) {
    return 'YTD'
  }
  if (duration.asDays() === 365 || duration.asDays() === 366) {
    return '1y'
  }
  if (+range_start === +start && +range_end === +end) {
    return 'ALL'
  }
  return ''
}

export function calcSMA(data, count = 1, precision = 0, placeholder = false) {
  const result = []
  let sum = 0
  for (let i = 0; i < data.length; i += 1) {
    sum += data[i]
    if (i < count - 1) {
      if (placeholder !== false) {
        result.push(placeholder)
      }
      continue
    }
    if (i >= count) {
      sum -= data[i - count]
    }
    result.push(+(sum / count).toFixed(precision))
  }
  return result
}

export function calcSMAwithTime(data, count = 1, precision = 0, placeholder = false) {
  const result = []
  let sum = 0
  for (let i = 0; i < data.length; i += 1) {
    sum += data[i][1]
    if (i < count - 1) {
      if (placeholder !== false) {
        result.push(placeholder)
      }
      continue
    }
    if (i >= count) {
      sum -= data[i - count][1]
    }
    result.push([data[i][0], +(sum / count).toFixed(precision)])
  }
  return result
}

export function predictSMA(sma, sampleStart, predictDuration) {
  const predictStart = moment(_.last(sma)[0]);
  const predictEnd = moment(predictStart).add(predictDuration);
  const sliceIndex = _.findIndex(sma, item => item[0] >= sampleStart);
  const { parameter: { gradient, intercept } } = regression('linear', sma.slice(sliceIndex));
  const psma = [];
  let time = +predictStart;
  const delta = (gradient * time + intercept - sma[sma.length - 1][1]);
  while (time <= predictEnd) {
    psma.push([
      time,
      +(gradient * time + intercept - delta).toFixed(1),
    ])
    time += 86400000;
  }
  return psma;
}

export const cookie = {
  set (name, value, days) {
    if (!window.document) {
      return false
    }
    cookie.remove(name)
    let expires = ''
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/;'
  },
  get (name) {
    if (!window.document) {
      return false
    }
    const nameEQ = name + '='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length)
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length)
      }
    }
    return null
  },
  remove (name) {
    if (!window.document) {
      return false
    }
    document.cookie = name + '=; Max-Age=-99999999;'
    document.cookie = name + '=; Max-Age=-99999999;'
  }
}