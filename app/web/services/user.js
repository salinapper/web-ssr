import request from '@/utils/request';

export function getUserInfo() {
  return request('/api/users/userinfo/');
}

export function resetPassword(params) {
  return request('/api/users/reset_password/', {
    method: 'POST',
    data: params
  })
}

export function updateUserInfo(params) {
  return request('/api/users/userinfo/', {
    method: 'POST',
    data: params
  })
}

export function logout() {
  return request('/api/users/logout/', {
    method: 'POST'
  })
}
export function queryNotices() {
  return request('/api/user/notices');
}

export function register(params) {
  return request('/api/user/register', {
    method: 'POST',
    body: params,
  });
}

export function userLogin(params) {
  return request('/api/user/login', {
    method: 'POST',
    body: params,
  });
}

export function getCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}&ref=register`);
}
