import request from '@/utils/request';

export function getBlog(params) {
  return request('/api/blog/detail/', { params })
}

export function getBlogList(params) {
  return request('/api/blog/list/', { params })
}