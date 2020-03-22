import { GET_CURRENT_ACTOR_ID, FIND_CURRENT_ACTOR_BY_ID } from './actions.js';
import { updateObject } from '../../global/utils/global.js';

const defaultState = {
  currentActorId: '',
  profileToSearch: false,
};

export const getActor = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CURRENT_ACTOR_ID:
      return updateObject(state, { currentActorId: action.payload });
    case FIND_CURRENT_ACTOR_BY_ID: {
      return updateObject(state, {
        profileToSearch: action.payload.find((el) => el.id === state.currentActorId),
      });
    }

    default:
      return state;
  }
};
