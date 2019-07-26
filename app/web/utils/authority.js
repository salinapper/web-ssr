const localStorage = window.localStorage || {
  getItem() { },
  setItem() { },
  removeItem() { },
}

export function getAuthority() {
  // return localStorage.getItem('coinsummer-authority') || '';
  const infojson = localStorage.getItem('CoinSummer:userinfo');
  try {
    return JSON.parse(infojson)
  } catch(e) {
    return null
  }
}

export function setAuthority() {

}

export function clearAuthority() {
  localStorage.removeItem('CoinSummer:userinfo');
  localStorage.removeItem('CoinSummer:jwt-token');
}

export function getToken() {
  return localStorage.getItem('CoinSummer:jwt-token') || '';
}

export function setToken(token) {
  return localStorage.setItem('CoinSummer:jwt-token', token);
}