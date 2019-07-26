import moment from 'moment';
import _ from 'lodash';
import { getBlog, getBlogList } from '@/services/blog';

export default {
  namespace: 'blog',

  state: {
    list: [],
    pagesize: 10,
    page: 0,
    hasMore: true,
    fail: '',
    curId: 0,
    detail: {},
    relation: [],
    open: false,
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getBlog, payload);
      yield put({
        type: 'getBlogHandle',
        payload: {
          response,
          ...payload
        }
      })
    },
    *clearList(_, { put }) {
      yield put({
        type: 'clearListHandle'
      })
    },
    *fetchList({ payload }, { call, put }) {
      const response = yield call(getBlogList, payload);
      if (response.status !== 'Successful') {
        yield put({
          type: 'fail',
          payload: {
            response
          }
        })
      } else {
        yield put({
          type: 'getBlogListHandle',
          payload: {
            response,
            ...payload
          }
        })
      }
    },
    *toggleListPanel(_, { put }) {
      yield put({
        type: 'toggleListPanelHandle'
      })
    },
    *openListPanel(_, { put }) {
      yield put({
        type: 'setListPanel',
        payload: true
      })
    },
    *closeListPanel(_, { put }) {
      yield put({
        type: 'setListPanel',
        payload: false
      })
    },
  },

  reducers: {
    fail(state, { payload }) {
      return {
        ...state,
        fail: payload.response.msg
      }
    },
    getBlogHandle(state, { payload }) {
      if (payload.response.status !== 'Successful') {
        return {
          ...state,
          curId: payload.id,
          detail: {
            title: payload.response.status,
            content: payload.response.msg,
          },
          relation: []
        }
      }
      return {
        ...state,
        curId: payload.id,
        detail: payload.response.data.detail,
        relation: payload.response.data.relation,
      }
    },
    getBlogListHandle(state, { payload }) {
      const list = payload.response.data || []
      if (payload.page === 0) {
        return {
          ...state,
          list,
          hasMore: list.length > 0,
          page: payload.page,
        }
      }
      return {
        ...state,
        list: state.list.concat(list),
        hasMore: list.length > 0,
        page: payload.page,
      }
    },
    clearListHandle(state) {
      return {
        ...state,
        list: [],
        hasMore: true,
        page: 0,
        fail: '',
      }
    },
    toggleListPanelHandle(state) {
      return {
        ...state,
        open: !state.open,
      }
    },
    setListPanel(state, { payload }) {
      return {
        ...state,
        open: payload
      }
    },
  }
}