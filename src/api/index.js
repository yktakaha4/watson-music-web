import 'whatwg-fetch';

const api = fetch => () => fetch().then((response) => {
  if (!response.ok) {
    console.warn(response);
  }
  return response.json();
}).catch((ex) => {
  console.error(ex);
  return {
    error: 'error',
  };
});

const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
};

const query = queryParams => new URLSearchParams(queryParams).toString();

export const postRequest = (text, userId) => api(() => fetch(`./api/requests?${query({
  userId,
})}`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    text,
  }),
}));

export const getRequests = userId => api(() => fetch(`./api/requests?${query({
  userId,
})}`, {
  method: 'GET',
  headers,
}));

export const deleteRequest = (requestId, userId) => api(() => fetch(`./api/requests/${requestId}?${query({
  userId,
})}`, {
  method: 'DELETE',
  headers,
}));

export const getNowPlaying = () => api(() => fetch('./api/tracks/now-playing', {
  method: 'GET',
  headers,
}));

export const postFeedback = (userId, feedbackType) => api(() => fetch(`./api/feedbacks?${query({
  userId,
})}`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    feedbackType,
  }),
}));

export const getHistories = () => api(() => fetch('./api/tracks/histories', {
  method: 'GET',
  headers,
}));

export const checkStatus = () => api(() => fetch('./api/batch/status', {
  method: 'GET',
  headers,
}));

export const updateMusic = () => api(() => fetch('./api/batch/update-music', {
  method: 'POST',
  headers,
}));

export const learnFeedbacks = () => api(() => fetch('./api/batch/learn-feedbacks', {
  method: 'POST',
  headers,
}));
