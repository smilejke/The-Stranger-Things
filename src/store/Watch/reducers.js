import {
  LOAD_SEASON_INFO_DATA,
  SET_CURRENT_RANKINGS_AND_VOTES,
  TO_VOTE,
  ALLOW_TO_VOTE_AGAIN,
} from './actions.js';
import { updateObject, updateVotes, updateRank } from '../../global/global.js';

const defaultState = {
  currentSeason: false,
  totalVotes: 0,
  totalRank: 0,
  voted: false,
};

export const getSerialEpisodesData = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_SEASON_INFO_DATA:
      return updateObject(state, { currentSeason: action.payload[0] });
    case SET_CURRENT_RANKINGS_AND_VOTES:
      return updateObject(state, { totalRank: action.payload, totalVotes: action.payload_2 });
    case TO_VOTE:
      return updateObject(state, {
        totalRank: updateRank(state.totalRank, state.totalVotes, action.payload),
        totalVotes: updateVotes(state.totalVotes),
        voted: true,
      });
    case ALLOW_TO_VOTE_AGAIN:
      return updateObject(state, { voted: false });

    default:
      return state;
  }
};
