import fetch from 'node-fetch';

const API_URL = 'https://yts.am/api/v2/list_movies.json';

export const getMovies = (limit, rating) => {
  let REQUEST_URL;

  if (limit > 0 && rating > 0) {
    REQUEST_URL = `${API_URL}?limit=${limit}&minimum_rating=${rating}`;
  } else if (limit > 0) {
    REQUEST_URL = `${API_URL}?limit=${limit}`;
  } else if (rating > 0) {
    REQUEST_URL = `${API_URL}?minimum_rating=${rating}`;
  }

  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
