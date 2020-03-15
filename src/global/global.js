export const categoryUrls = {
  all: 'http://localhost:3001/actors',
  maincast: 'http://localhost:3001/actors?majority=maincast',
  secondary: 'http://localhost:3001/actors?majority=secondary',
  male: 'http://localhost:3001/actors?gender=Male',
  female: 'http://localhost:3001/actors?gender=Female',
};

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export const seasonImageStyles = {
  first: 'season-description-first-image',
  second: 'season-description-second-image',
  third: 'season-description-third-image',
};

export const seasonUrls = {
  seasonOneUrl: 'http://localhost:3001/watch?id=SEASON_ONE',
  seasonTwoUrl: 'http://localhost:3001/watch?id=SEASON_TWO',
  seasonThreeUrl: 'http://localhost:3001/watch?id=SEASON_THREE',
};
