export const LOAD_SEASON_INFO_DATA = 'LOAD_SEASON_INFO_DATA';
export const SET_CURRENT_RANKINGS_AND_VOTES = 'SET_CURRENT_VOTES';
export const TO_VOTE = 'TO_VOTE';
export const ALLOW_TO_VOTE_AGAIN = 'ALLOW_TO_VOTE_AGAIN';

const loadSeasonData = (data) => {
  return {
    type: LOAD_SEASON_INFO_DATA,
    payload: data,
  };
};

const setRankAndVotes = (rank, votes) => {
  return {
    type: SET_CURRENT_RANKINGS_AND_VOTES,
    payload: rank,
    payload_2: votes,
  };
};

export const vote = (vote) => {
  return {
    type: TO_VOTE,
    payload: vote,
  };
};

const allowToVoteAgain = () => {
  return {
    type: ALLOW_TO_VOTE_AGAIN,
  };
};

export const getSeasonData = (url, loaderOn, loaderOff) => (dispatch) => {
  dispatch(loaderOn());
  setTimeout(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(loadSeasonData(data)))
      .then((data) =>
        dispatch(
          setRankAndVotes(
            data.payload[0].header.headerTitle.totalRank,
            data.payload[0].header.headerTitle.allVotes,
          ),
        ),
      )
      .then(dispatch(loaderOff()))
      .then(dispatch(allowToVoteAgain()));
  }, 1000);
};
