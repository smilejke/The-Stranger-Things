import { TO_VOTE, SET_SEASON_DATA_TO_STORE, SET_MARKS_DATA_TO_STORE } from './actions.js';
import { updateObject, updateMarks } from '../../global/global.js';

const defaultState = {
  currentSeasonData: false,
  voteCount: 0,
  rank: 0,
  marks: [],
  voted: false,
};

export const getSerialEpisodesData = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEASON_DATA_TO_STORE:
      return updateObject(state, { currentSeasonData: action.payload });
    case SET_MARKS_DATA_TO_STORE:
      return updateObject(state, {
        marks: action.payload,
        voteCount: action.payload.length,
        rank: action.payload.reduce((a, b) => a + b) / action.payload.length,
        voted: false,
      });
    case TO_VOTE:
      return updateObject(state, {
        marks: updateMarks(state.marks, action.payload),
        voteCount: state.marks.length,
        rank: state.marks.reduce((a, b) => a + b) / state.marks.length,
        voted: true,
      });

    default:
      return state;
  }
};
