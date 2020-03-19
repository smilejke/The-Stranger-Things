export const TO_VOTE = 'TO_VOTE';
export const SET_SEASON_DATA_TO_STORE = 'SET_SEASON_DATA_TO_STORE';

export const setSeasonData = (data) => {
  return {
    type: SET_SEASON_DATA_TO_STORE,
    payload: data,
  };
};

export const vote = (vote) => {
  return {
    type: TO_VOTE,
    payload: vote,
  };
};
