import { GET_SEASON_ID, TO_VOTE, SET_SEASON_DATA_TO_STORE } from './actions.js';
import { updateObject, updateVotes, updateRank } from '../../global/global.js';

const defaultState = {
  currentSeason: 'SEASON_ONE',
  currentSeasonData: false,
  seasonId: false,
  totalVotes: 0,
  totalRank: 0,
  voted: false,
};

export const getSerialEpisodesData = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SEASON_ID:
      return updateObject(state, { seasonId: action.payload });
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
