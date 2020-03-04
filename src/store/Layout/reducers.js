import { COLLAPSE_SIDE_BAR, ACTORS_PAGE_IS_SHOWN, GREETINGS_PAGE_IS_SHOWN } from './actions.js';

const defaultState = {
  pages: {
    greetings: false,
    actors: false,
    watch: false,
  },
  sideBarCollapsed: true,
};

export const layoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case COLLAPSE_SIDE_BAR:
      return { ...state, sideBarCollapsed: action.payload };
    case ACTORS_PAGE_IS_SHOWN:
      return {
        ...state,
        pages: {
          greetings: false,
          actors: action.payload ? action.payload : !action.payload,
          watch: false,
        },
      };
    case GREETINGS_PAGE_IS_SHOWN:
      return {
        ...state,
        pages: {
          greetings: action.payload ? action.payload : !action.payload,
          actors: false,
          watch: false,
        },
      };

    default:
      return state;
  }
};
