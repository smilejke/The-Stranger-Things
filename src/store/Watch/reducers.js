import { TO_VOTE, SET_SEASON_DATA_TO_STORE, TAKE_VOTING_DATA } from './actions.js';
import { updateObject, updateVotes, updateMarks } from '../../global/global.js';

const defaultState = {
  currentSeasonData: false,
  totalVotes: 0,
  totalRank: 0,
  marks: [],
};

export const getSerialEpisodesData = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEASON_DATA_TO_STORE:
      return updateObject(state, { ...state, currentSeasonData: action.payload });
    case TAKE_VOTING_DATA:
      return updateObject(state, {
        ...state,
        totalVotes: action.payload1,
        totalRank: action.payload2,
        marks: action.payload3,
        voted: false,
      });

    case TO_VOTE:
      return updateObject(state, {
        ...state,
        totalRank:
          (state.marks.reduce((a, b) => a + b) + action.payload) / updateVotes(state.totalVotes),
        totalVotes: updateVotes(state.totalVotes),
        marks: updateMarks(state.marks, action.payload),
        voted: true,
      });

    default:
      return state;
  }
};
