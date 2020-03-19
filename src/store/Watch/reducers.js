import { TO_VOTE, SET_SEASON_DATA_TO_STORE } from './actions.js';
import { updateObject, updateVotes, updateRank } from '../../global/global.js';

const defaultState = {
  currentSeasonData: false,
  totalVotes: 0,
  totalRank: 0,
  voted: false,
};

export const getSerialEpisodesData = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEASON_DATA_TO_STORE:
      return updateObject(state, { currentSeasonData: action.payload });
    case TO_VOTE:
      return updateObject(state, {
        totalRank: updateRank(state.totalRank, state.totalVotes, action.payload),
        totalVotes: updateVotes(state.totalVotes),
        voted: true,
      });

    default:
      return state;
  }
};
