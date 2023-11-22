import { checkResponse } from '../constants/checkResponse';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.apptrack.pro'
    : 'http://localhost:3001';

// const newBaseUrl = 'http://localhost:3001';
function getToken() {
  return localStorage.getItem('jwt');
}

function signup(data) {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('profilePicture', data.profilePicture);
  formData.append('email', data.email);
  formData.append('password', data.password);

  return fetch(`${baseUrl}/signup`, {
    method: 'POST',

    body: formData,
  }).then(checkResponse);
}

function signin(data) {
  const { email, password } = data;

  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

function editProfileData(data) {
  const formData = new FormData();
  formData.append('name', data.name);

  // Check if profilePicture is a file or an object
  if (data.profilePicture instanceof File) {
    formData.append('profilePicture', data.profilePicture);
  } else {
    // Set a default value for emptyFile or skip appending if needed
    const emptyFile = new File([], 'emptyFile');
    formData.append('profilePicture', emptyFile);
  }

  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: formData,
  })
    .then(checkResponse)
    .catch((e) => console.log(e));
}

//get Token
function checkToken(token) {
  return fetch(`${baseUrl}/users/me`, {
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
