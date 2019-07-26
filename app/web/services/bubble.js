import request from '@/utils/request';

export async function getBubble(params) {
  // http://www.coinsummer.com/api/v1/btc_api/bubble_index
  return request(`/api/bubble`);
}
