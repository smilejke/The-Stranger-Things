import { DOWNLOAD_INFO_FOR_LIQUID_BANNER } from './actions.js';

const defaultState = {
  backgroundImages: [],
};

export const addBannerBackground = (state = defaultState, action) => {
  switch (action.type) {
    case DOWNLOAD_INFO_FOR_LIQUID_BANNER:
      return { ...state, backgroundImages: action.payload };

    default:
      return state;
  }
};
