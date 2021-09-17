import './style/style.css';

import API from './modules/data';
import render from './modules/render/meals';

const endpoint = 'https://www.themealdb.com/api/json/v1/1/';
const likesEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/';

const displayMeals = () => {
  Promise.all([
    API.getMeals(`${endpoint}search.php?f=b`),
    API.getLikes(likesEndpoint),
  ]).then((data) => {
    render(data[0], data[1]);
  });
};

window.addEventListener('load', displayMeals);