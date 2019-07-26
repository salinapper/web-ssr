import { getSupply } from '@/services/datafeed';

export default {
  namespace: 'supply',

  state: {
    BTC: -1,
  },

  effects: {
    *fetch({ payload }, { put }) {
      const response = yield getSupply( payload )
      if (response.status === 'Successful') {
        yield put({
          type: 'save',
          payload: {
            ...payload,
            ...response.data
          },
        });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        [payload.symbol]: payload.supply,
      };
    },
  },
}