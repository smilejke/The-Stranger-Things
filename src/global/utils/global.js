import { message } from 'antd';

export const success = () => {
  message.success('Спасибо за ваше мнение!');
};

export const categoryUrls = {
  all: 'http://localhost:3001/actors',
  maincast: 'http://localhost:3001/actors?majority=maincast',
  secondary: 'http://localhost:3001/actors?majority=secondary',
  male: 'http://localhost:3001/actors?gender=male',
  female: 'http://localhost:3001/actors?gender=female',
};

export const HeaderText = {
  watchBlock: {
    announcer: 'Все сезоны',
    seasonCount: '3 сезона',
  },
  anatomy: 'Анатомия сериала "Очень странные дела"',
  newsHeader: 'Новости сериала',
  biographyHeader: 'Биография:',
  characterInfoHeader: 'О сыгранном персонаже:',
  filmographyHeader: 'Фильмография:',
};

export const seasonIds = [
  { id: 'SEASON_ONE', text: 'Первый сезон' },
  { id: 'SEASON_TWO', text: 'Второй сезон' },
  { id: 'SEASON_THREE', text: 'Третий сезон' },
];

export const seasonImageStyles = {
  first: 'season-description-first-image',
  second: 'season-description-second-image',
  third: 'season-description-third-image',
};

export const fetchUrls = {
  mainPageData: 'http://localhost:3001/greetings',
  profiles: 'http://localhost:3001/profiles',
  views: 'http://localhost:3001/views',
  news: 'http://localhost:3001/news',
};

export const navOptions = {
  routes: {
    home: '/',
    actors: '/actors/all',
    watch: {
      seasonOne: '/watch/SEASON_ONE',
      seasonTwo: '/watch/SEASON_TWO',
      seasonThree: '/watch/SEASON_THREE',
    },
  },
};

export const linkOptionsToCreate = [
  { adress: '/', text: 'Главная' },
  { adress: '/actors/all', text: 'Актеры сериала' },
];

export const submenu = [
  { adress: '/watch/SEASON_ONE', text: 'Первый сезон', id: 'SEASON_ONE' },
  { adress: '/watch/SEASON_TWO', text: 'Второй сезон', id: 'SEASON_TWO' },
  { adress: '/watch/SEASON_THREE', text: 'Третий сезон', id: 'SEASON_THREE' },
];

export const setPageTitle = (name) => {
  return (document.title = name);
};

export const refreshPage = (fn1body, fn1Param, f1param2, fn1param3, fn2body) => {
  fn1body(fn1Param, f1param2, fn1param3);
  fn2body();
};

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export const updateVotes = (stateElem) => {
  return stateElem + 1;
};
export const updateMarks = (arr, mark) => {
  const newArr = arr;
  newArr.push(mark);
  return newArr;
};
