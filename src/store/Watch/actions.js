export const LOAD_SEASON_INFO_DATA = 'LOAD_SEASON_INFO_DATA';

const loadSeasonData = (id) => {
  return {
    type: LOAD_SEASON_INFO_DATA,
    payload: id,
  };
};

export const getSeasonData = (url) => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => dispatch(loadSeasonData(data)));
};
