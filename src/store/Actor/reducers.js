import { GET_ACTOR } from './actions.js';

export const getActor = (state = { actor: 'unitiled' }, action) => {
  if (action.type === GET_ACTOR) {
    return { actor: action.payload };
  } else {
    return state;
  }
};
