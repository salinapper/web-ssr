import { getUserInfo, resetPassword, updateUserInfo, logout } from '@/services/user';
import { clearAuthority } from '@/utils/authority';
import _ from 'lodash'
import { message } from 'antd';

export default {
  namespace: 'user',

  state: {
    list: [],
    status: -1,
    userInfo: null,
  },

  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(getUserInfo);
      yield put({
        type: 'saveUserInfo',
        payload: {
          code: 0,
          data: {
            userinfo: {
              date_joined: "2019-05-14",
              email: "liuzhan@siqitao.com",
              is_active: true,
              nickname: "liuzhan@siqitao.com",
              tradingview_publish: false,
            }
          }
        }
      })
      /*
      yield put({
        type: 'saveUserInfo',
        payload: response.status === 'Successful' ? response : null,
      });
      */
    },
    *resetPassword({ payload }, { call }) {
      const response = yield call(resetPassword, payload);
      if (response && response.status === 'Successful') {
        message.success(response.msg)
      } else {
        message.error(response.msg)
      }
    },
    *updateUserInfo({ payload }, { call }) {
      const response = yield call(updateUserInfo, payload);
      if (response && response.status === 'Successful') {
        message.success(response.msg)
      } else {
        message.error(response.msg)
      }
    },
    *logout(_, { call, put }) {
      yield call(logout);
      yield put({
        type: 'clearUserInfo'
      })
    }
  },

  reducers: {
    saveUserInfo(state, { payload }) {
      const userInfo = _.get(payload, 'data.userinfo', null);
      return {
        ...state,
        status: userInfo ? 1 : 0,
        userInfo
      };
    },
    clearUserInfo(state, { payload }) {
      clearAuthority()
      location.href = '/?loginfrom=' + encodeURIComponent(location.pathname + location.search)
    }
  },
};
