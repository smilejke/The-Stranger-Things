export const DOWNLOAD_INFO_FOR_ACTORS_CARDS = 'DOWNLOAD_INFO_FOR_ACTORS_CARDS';
export const LAUNCH_LOADING = 'LAUNCH_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const uploadInfoForRenderCards = (data) => {
  return {
    type: DOWNLOAD_INFO_FOR_ACTORS_CARDS,
    payload: data,
  };
};

export const startLoading = () => {
  return {
    type: LAUNCH_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};

export const getActorsData = (url) => (dispatch) => {
  dispatch(startLoading());
  setTimeout(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(uploadInfoForRenderCards(data)))
      .then(dispatch(stopLoading()));
  }, 1000);
};
