import { checkResponse } from '../constants/checkResponse';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.wtwr.zmurk.com'
    : 'http://localhost:3001';

const newBaseUrl = 'http://localhost:3001';
function getToken() {
  return localStorage.getItem('jwt');
}

function signup(data) {
  const { name, avatar, email, password } = data;

  return fetch(`${newBaseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
}

function signin(data) {
  const { email, password } = data;

  return fetch(`${newBaseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

function editProfileData(data) {
  const { avatar, name } = data;

  return fetch(`${newBaseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ avatar, name }),
  })
    .then(checkResponse)
    .catch((e) => console.log(e));
}

//get Token
function checkToken(token) {
  return fetch(`${newBaseUrl}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}

export { signin, signup, checkToken, editProfileData };
