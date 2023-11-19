import { checkResponse } from '../constants/checkResponse';

const baseUrl =
  import.meta.env.NODE_ENV === 'production'
    ? 'https://api.apptrack.pro'
    : 'http://localhost:3001';

// const newBaseUrl = 'http://localhost:3001';

function getToken() {
  return localStorage.getItem('jwt');
}

// GET Jobs
export function getJobs() {
  return fetch(`${baseUrl}/jobs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
}

// POST Jobs
export function postJobs(data) {
  const { name, position, jobId, date, status } = data;

  return fetch(`${baseUrl}/jobs`, {
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
  return fetch(`${baseUrl}/jobs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

export function updateJobStatus(app, element, id) {
  const { name, position, jobId } = app;

  return fetch(`${baseUrl}/jobs/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ name, position, jobId, status: element }),
  }).then(checkResponse);
}
