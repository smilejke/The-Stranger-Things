import {
  COLLAPSE_SIDE_BAR_ON_SHOW,
  COLLAPSE_SIDE_BAR_ON_HIDE,
  ACTORS_PAGE_IS_SHOWN,
  GREETINGS_PAGE_IS_SHOWN,
} from '../components/Layout/Layout.js';

const initialState = {
  pages: {
    greetings: false,
    actors: false,
    watch: false,
  },
  actorCards: [],
  backgroundImages: [],
  sideBarCollapsed: true,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLAPSE_SIDE_BAR_ON_SHOW:
      return { ...state, sideBarCollapsed: action.payload };
    case COLLAPSE_SIDE_BAR_ON_HIDE:
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
