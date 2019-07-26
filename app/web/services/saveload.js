import request from '@/utils/request';

const baseUrl = '/api/saveload/1.1/charts'

export function getChartList(params) {
  return request(baseUrl, { params })
}
export function saveChart(params) {
  return request(baseUrl, {
    method: 'POST',
    data: params,
    requestType: 'form'
  })
}
export function removeChart(params) {
  return request(baseUrl, {
    method: 'DELETE',
    params,
    requestType: 'form'
  })
}
export function loadChart(params) {
  return request(baseUrl, { params })
}
