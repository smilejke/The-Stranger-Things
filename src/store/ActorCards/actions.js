export const DOWNLOAD_INFO_FOR_ACTORS_CARDS = 'DOWNLOAD_INFO_FOR_ACTORS_CARDS';

export const uploadInfoForRenderCards = (data) => {
  return {
    type: DOWNLOAD_INFO_FOR_ACTORS_CARDS,
    payload: data,
  };
};

export const getActorsData = (url, loadingOn, loadingOff) => (dispatch) => {
  dispatch(loadingOn);
  setTimeout(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(uploadInfoForRenderCards(data)))
      .then(
        setTimeout(() => {
          dispatch(loadingOff);
        }, 100),
      );
  }, 900);
};
