import {
  COLLAPSE_SIDE_BAR_ON_SHOW,
  COLLAPSE_SIDE_BAR_ON_HIDE,
  ACTORS_PAGE_IS_SHOWN,
} from '../components/ActorsInfoPage/Layout/Layout.js';

const initialState = {
  pages: {
    greetings: false,
    actors: true,
    watch: false,
  },
  onHover: false,
  actorCards: [],
  sideBarCollapsed: true,
  actorsPageShowed: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLAPSE_SIDE_BAR_ON_SHOW:
      return { ...state, sideBarCollapsed: action.payload };
    case COLLAPSE_SIDE_BAR_ON_HIDE:
      return { ...state, sideBarCollapsed: action.payload };
    case ACTORS_PAGE_IS_SHOWN:
      return { ...state, actorsPageShowed: action.payload ? action.payload : !action.payload };

    default:
      return state;
  }
};
