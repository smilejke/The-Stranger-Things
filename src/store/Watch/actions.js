export const LOAD_SEASON_INFO_DATA = 'LOAD_SEASON_INFO_DATA';

const loadSeasonData = (id) => {
  return {
    type: LOAD_SEASON_INFO_DATA,
    payload: id,
  };
};

export const getSeasonData = (url, loaderOn, loaderOff) => (dispatch) => {
  dispatch(loaderOn());
  setTimeout(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(loadSeasonData(data)))
      .then(dispatch(loaderOff()));
  }, 1000);
};
