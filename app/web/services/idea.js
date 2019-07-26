import request from '@/utils/request';

const baseUrl = '/api/idea/'

export function saveIdea(params) {
  return request(baseUrl + 'save/', {
    method: 'POST',
    data: params
  })
}

export function getIdeaList({ page, ctx }) {
  const filter = {
    hot: 'rank',
    yours: '',
    latest: 'public'
  }[ctx]
  return request(baseUrl + 'list/', {params: {page, filter}})
}

export function getIdeaDetail(params) {
  return request(baseUrl + 'detail/', {params})
}

export function delIdea(params) {
  return request(baseUrl + 'del/', {
    method: 'POST',
    data: params
  })
}