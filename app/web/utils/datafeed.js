import { getHistory } from '@/services/datafeed';
import { getDefaultTimezone } from './utils';

const timezone = getDefaultTimezone()

export default {
  onReady (resolve) {
    setTimeout(function() {
      resolve({
        exchanges: [],
        symbols_types: [],
        supported_resolutions: ['D', 'W', 'M'],
        supports_group_request: false,
        supports_marks: false,
        supports_search: true,
        supports_time: false,
        supports_timescale_marks: false,
      })
    }, 0)
  },
  resolveSymbol: async function (name, resolve, reject) {
    const pricescale = {
      BTC_Capacity: 1,
      GOLD_Capacity: 1,
      BTC_Address: 1,
      BTCUSD: 10,
      BTC_1400p: 10,
      BTC_Bubble: 100,
      BTCGOLD: 10000,
    }[name] || 1;

    setTimeout(function() {
      if (name === 'none') {
        return reject('symbolInfo requited.')
      }
      resolve({
        name,
        ticker: name,
        description: name,
        timezone,
        session: '24x7',
        minmov: 1,
        pricescale,
        has_intraday: false,
        has_daily: true,
        has_weekly_and_monthly: true,
        has_no_volume: true,
        supported_resolutions: ["D", "W", "M"],
      });
    }, 0)
  },
  getBars: function (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
    const symbol = symbolInfo.ticker
    getHistory({
      symbol,
      from,
      to
    }).then((res, err) => {
      if (!res) {
        return onErrorCallback(new Error('Network error'))
      }
      if (res.status === 'Failed') {
        return onErrorCallback(new Error(res.msg))
      }
      let items = res.data.items
      for (var i = 0; i < items.length; i += 1) {
        items[i].time = items[i].timestamp
      }
      if (symbol === 'BTC_Capacity' || symbol === 'GOLD_Capacity') {
        for (var i = 0; i < items.length; i += 1) {
          items[i].close = items[i].market_cap
        }
      }
      if (symbol === 'BTCGOLD') {
        for (var i = 0; i < items.length; i += 1) {
          items[i].close = +(items[i].rate / 100).toFixed(4)
          items[i].high = items[i].close
          items[i].low = items[i].close
          items[i].open = items[i].close
        }
      }
      if (symbol === 'BTC_Bubble') {
        for (var i = 0; i < items.length; i += 1) {
          items[i].close = items[i].index
          items[i].high = items[i].index
          items[i].low = items[i].index
          items[i].open = items[i].index
        }
      }
      if (resolution === 'W' || resolution === '1W') {
        items = items.reduce((list, item, index) => {
          if (index % 7 === 0 && item.close !== null && item.low !== null) {
            list.push(item)
          } else {
            const lastItem = list[list.length - 1]
            if (index % 7 === 6 && item.close) {
              lastItem.close = item.close
            }
            if (item.high && item.high > lastItem.high) {
              lastItem.high = item.high
            }
            if (item.low && item.low < lastItem.low) {
              lastItem.low = item.low
            }
          }
          return list
        }, [])
      }
      onHistoryCallback(items, {noData: !items.length})
    }).catch(err => {
      console.error(err)
      onErrorCallback(err)
    })
  },
  subscribeBars: function (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
  },
  unsubscribeBars (subscriberUID) {
  },
  destroy () {
  }
}
