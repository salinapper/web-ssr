import request from '@/utils/request';
import moment from 'moment';

export function getHistory({ symbol, from, to }) {
  symbol = symbol.toLowerCase()
  return request(`/api/cryptodata/history/${symbol}/`, { params: {
    start: from,
    end: to
  } }).then(res => {
    if (res.status === 'Successful') {
      // Clean data
      res.data.items = res.data.items.filter(item => item.close !== null)
    }
    return res
  })
}

let today = moment.utc().startOf('day').unix();
export function getPredict(count) {
  return request('/api/cryptodata/btc_smap/', { params: {
    count,
    start: today,
  }})
}

export function getPredicts() {
  return Promise.all([
    getPredict(1400),
    // getPredict(200),
    // getPredict(350),
  ]).then((resps) => {
    for (let i = 0; i < resps.length; i += 1) {
      if (resps[i].status === 'Failed') {
        return resps[i]
      }
    }
    return {
      status: 'Successful',
      data: {
        psma1400: resps[0].data.items,
        // psma350: resps[1].data.items,
        // psma200: resps[2].data.items,
      }
    }
  })
}

export function getDailyTxs(params) {
  return request('/api/cryptodata/history/transactions/', { params });
}

export function getDifficulty(params) {
  return request('/api/cryptodata/history/difficulty/', { params });
}

export function getSupply(params) {
  return request('/api/cryptodata/history/supply/', { params});
}

export function getTopMinings(params) {
  return request('/api/mine/history/', { params});
}

export function getVolumes() {
  return request('/api/cryptodata/history/exchange/volume/')
}