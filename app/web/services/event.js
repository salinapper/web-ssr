import request from '@/utils/request';
import moment from 'moment';

export async function getEvent(params) {
  return request('/api/big_event/', { params });
}
