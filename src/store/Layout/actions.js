export const COLLAPSE_SIDE_BAR = 'COLLAPSE_SIDE_BAR';
export const ACTORS_PAGE_IS_SHOWN = 'ACTORS_PAGE_IS_SHOWN';
export const GREETINGS_PAGE_IS_SHOWN = 'GREETINGS_PAGE_IS_SHOWN';
export const DOWNLOAD_INFO_FOR_ACTORS_CARDS = 'DOWNLOAD_INFO_FOR_ACTORS_CARDS';

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

export const loadData = () => (dispatch) => {
  fetch('http://localhost:3001/actors')
    .then((response) => response.json())
    .then((data) => dispatch(uploadInfoForRenderCards(data)));
};
