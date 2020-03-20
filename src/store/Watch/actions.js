export const TO_VOTE = 'TO_VOTE';
export const SET_SEASON_DATA_TO_STORE = 'SET_SEASON_DATA_TO_STORE';
export const TAKE_VOTING_DATA = 'TAKE_VOTING_DATA';

export const setSeasonData = (data) => {
  return {
    type: SET_SEASON_DATA_TO_STORE,
    payload: data,
  };
};

export const getVotes = (votes, rank, marks) => {
  return {
    type: TAKE_VOTING_DATA,
    payload1: votes,
    payload2: rank,
    payload3: marks,
  };
};

export const vote = (vote) => {
  return {
    type: TO_VOTE,
    payload: vote,
  };
};
