export const SET_NEWS_DATA_TO_STORE = 'SET_NEWS_DATA_TO_STORE';
export const GET_CURRENT_NEWS_BY_ID = 'GET_CURRENT_NEWS_BY_ID';

export const setNewsData = (data) => {
  return {
    type: SET_NEWS_DATA_TO_STORE,
    payload: data,
  };
};

export const getCurrentNews = (id) => {
  return {
    type: GET_CURRENT_NEWS_BY_ID,
    payload: id,
  };
};
