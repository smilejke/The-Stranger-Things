import { GET_CURRENT_ACTOR_ID, FIND_CURRENT_ACTOR_BY_ID } from './actions.js';

const defaultState = {
  currentActorId: '',
  profileToSearch: null,
};

export const getActor = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CURRENT_ACTOR_ID:
      return { ...state, currentActorId: action.payload };
    case FIND_CURRENT_ACTOR_BY_ID: {
      return {
        ...state,
        profileToSearch: action.payload.find((el) => el.id === state.currentActorId),
      };
    }

    default:
      return state;
  }
};
