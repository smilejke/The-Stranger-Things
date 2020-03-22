export const categoryUrls = {
  all: 'http://localhost:3001/actors',
  maincast: 'http://localhost:3001/actors?majority=maincast',
  secondary: 'http://localhost:3001/actors?majority=secondary',
  male: 'http://localhost:3001/actors?gender=male',
  female: 'http://localhost:3001/actors?gender=female',
};

export const seasonIds = ['SEASON_ONE', 'SEASON_TWO', 'SEASON_THREE'];

export const seasonImageStyles = {
  first: 'season-description-first-image',
  second: 'season-description-second-image',
  third: 'season-description-third-image',
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

export const refreshPage = (fn1, param, fn2) => {
  fn1(param);
  fn2();
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
