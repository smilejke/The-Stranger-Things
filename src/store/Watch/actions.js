export const TO_VOTE = 'TO_VOTE';
export const SET_SEASON_DATA_TO_STORE = 'SET_SEASON_DATA_TO_STORE';
export const SET_MARKS_DATA_TO_STORE = 'SET_MARKS_DATA_TO_STORE';

export const setSeasonData = (data) => {
  return {
    type: SET_SEASON_DATA_TO_STORE,
    payload: data,
  };
};

export const setVotingData = (data) => {
  return {
    type: SET_MARKS_DATA_TO_STORE,
    payload: data,
  };
};

export const vote = (vote) => {
  return {
    type: TO_VOTE,
    payload: vote,
  };
};

export const sendDataToServer = (rank, adress, loadingOn, loadingOff) => (dispatch) => {
  dispatch(vote(rank));
  dispatch(loadingOn);
  setTimeout(() => {
    fetch(`http://localhost:3001/${adress}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ mark: rank }),
    }).then(
      setTimeout(() => {
        dispatch(loadingOff);
      }, 100),
    );
  }, 400);
};
