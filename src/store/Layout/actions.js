export const COLLAPSE_SIDE_BAR = 'COLLAPSE_SIDE_BAR';
export const ACTORS_PAGE_IS_SHOWN = 'ACTORS_PAGE_IS_SHOWN';
export const GREETINGS_PAGE_IS_SHOWN = 'GREETINGS_PAGE_IS_SHOWN';
export const DOWNLOAD_INFO_FOR_ACTORS_CARDS = 'DOWNLOAD_INFO_FOR_ACTORS_CARDS';
export const LAUNCH_LOADING = 'LAUNCH_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const hoverSideBar = (isHover) => {
  return {
    type: COLLAPSE_SIDE_BAR,
    payload: isHover,
  };
};

export const showGreetingsPageContent = (isShown) => {
  return {
    type: GREETINGS_PAGE_IS_SHOWN,
    payload: isShown,
  };
};

export const showActorsPageContent = (isShown) => {
  return {
    type: ACTORS_PAGE_IS_SHOWN,
    payload: isShown,
  };
};

export const uploadInfoForRenderCards = (data) => {
  return {
    type: DOWNLOAD_INFO_FOR_ACTORS_CARDS,
    payload: data,
  };
};

export const startLoading = (flag) => {
  return {
    type: LAUNCH_LOADING,
    payload: flag,
  };
};

export const stopLoading = (flag) => {
  return {
    type: STOP_LOADING,
    payload: flag,
  };
};

export const getActorsData = (flag, url) => (dispatch) => {
  dispatch(startLoading(!flag));
  setTimeout(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(uploadInfoForRenderCards(data)));
    dispatch(stopLoading(flag));
  }, 500);
};
