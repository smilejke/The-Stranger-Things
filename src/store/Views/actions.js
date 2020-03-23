import { fetchUrls } from '../../global/utils/global.js';

export const SET_PAGE_VIEWS_COUNTER = 'SET_PAGE_VIEWS_COUNTER';
export const GET_VIEWS_FROM_STORE = 'GET_VIEWS_FROM_STORE';

const setViewsCounter = (count) => {
  return {
    type: SET_PAGE_VIEWS_COUNTER,
    payload: count,
  };
};

export const getViews = () => (dispatch) => {
  fetch(fetchUrls.views)
    .then((response) => response.json())
    .then((data) => dispatch(setViewsCounter(data.counter)))
    .then((data) =>
      setTimeout(() => {
        fetch(fetchUrls.views, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({ counter: data.payload + 1 }),
        });
        dispatch(setViewsCounter(data.payload + 1));
      }, 5000),
    );
};
