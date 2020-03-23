import { SET_PAGE_VIEWS_COUNTER } from './actions.js';
import { updateObject } from '../../global/utils/global.js';

const defaultState = {
  viewsCounter: 12,
  seen: false,
};

export const views = (state = defaultState, action) => {
  if (action.type === SET_PAGE_VIEWS_COUNTER)
    return updateObject(state, { viewsCounter: action.payload, seen: true });
  else return state;
};
