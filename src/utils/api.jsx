import { checkResponse } from '../constants/checkResponse';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.wtwr.zmurk.com'
    : 'http://localhost:3001';

const newBaseUrl = 'http://localhost:3001';

function getToken() {
  return localStorage.getItem('jwt');
}

// GET Jobs
export function getJobs() {
  return fetch(`${newBaseUrl}/jobs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
}

// POST Jobs
export function postJobs(data) {
  const { name, position, jobId, date, status } = data;

  return fetch(`${newBaseUrl}/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

// DELETE Jobs
export function deleteJobs(id) {
  return fetch(`${newBaseUrl}/jobs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}
