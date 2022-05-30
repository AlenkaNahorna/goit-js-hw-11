import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27696488-47cb76918e6b1b046fc57e4a0';

const url = `${BASE_URL}?key=${API_KEY}`;

export const fetchImgOptions = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
};

export const fetchImg = async params =>
  await axios.get(url, { params }).catch(event => console.error(event));
