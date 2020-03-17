export const categoryUrls = {
  all: 'http://localhost:3001/actors',
  maincast: 'http://localhost:3001/actors?majority=maincast',
  secondary: 'http://localhost:3001/actors?majority=secondary',
  male: 'http://localhost:3001/actors?gender=Male',
  female: 'http://localhost:3001/actors?gender=Female',
};

export const seasonImageStyles = {
  first: 'season-description-first-image',
  second: 'season-description-second-image',
  third: 'season-description-third-image',
};

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export const updateVotes = (stateElem) => {
  return stateElem + 1;
};
export const updateRank = (rank, votes, newRankValue) => {
  return (rank * votes + newRankValue) / (votes + 1);
};
