/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BaseURL = 'https://pixabay.com/api/';

export const fetchImages = (query = 'dog', page = 1) => {
  const queryURL = `&q=${query}`;
  const setting = '?image_type=photo&orientation=horizontal';
  const key = `&key=${process.env.REACT_APP_APIKEY}`;
  const pageURL = `&page=${page}`;
  const perPageURL = '&per_page=12';
  return axios.get(BaseURL + setting + queryURL + pageURL + perPageURL + key);
};
