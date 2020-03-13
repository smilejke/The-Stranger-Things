import { SET_NEWS_DATA_TO_STORE, GET_CURRENT_NEWS_BY_ID } from './actions.js';

const defaultState = {
  news: [],
  currentNews: {},
};

export const newsDataSetter = (state = defaultState, action) => {
  switch (action.type) {
    case SET_NEWS_DATA_TO_STORE:
      return { ...state, news: action.payload };
    case GET_CURRENT_NEWS_BY_ID:
      return { ...state, currentNews: state.news.find((el) => el.id === action.payload) };
    default:
      return state;
  }
};
