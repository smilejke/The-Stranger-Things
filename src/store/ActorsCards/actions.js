export const DOWNLOAD_INFO_FOR_ACTORS_CARDS = 'DOWNLOAD_INFO_FOR_ACTORS_CARDS';

export const uploadInfoForRenderCards = (data) => {
  return {
    type: DOWNLOAD_INFO_FOR_ACTORS_CARDS,
    payload: data,
  };
};
