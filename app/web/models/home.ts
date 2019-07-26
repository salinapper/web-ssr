import { Model } from 'dva';
import { queryRestaurantData } from '@/services/home';
console.log('##################')
console.log(process)
// console.log('##################')

const HomeModel: Model = {
  namespace: 'home',
  state: {
    rank_id: '',
    coords: {
      latitude: '30.274151',
      longitude: '120.155151',
    },
    rests: [],
  },
  effects: {
    *queryRests({ payload }, { put, call, select }) {
      const coords = yield select(({ home }) => home.coords);
      const res = yield call(queryRestaurantData, {
        ...payload,
        ...coords,
      });
      console.log('---res-res', res);
      if (res) {
        yield put({
          type: 'saveRests',
          payload: res || {},
        });
      }
    },
  },
  reducers: {
    saveRests(state, action) {
      const payload = action['payload'];
      if (state.rests.length > 0) {
        state.rests = state.rests.concat(payload.items || []);
      } else {
        state.rests = payload.items || [];
      }
      state.rank_id = payload.meta.rank_id || '';
    },
    changeCoords(state, action) {
      state.coords = action['payload'];
    },
  },
};

export default HomeModel;
