import {
  COLLAPSE_SIDE_BAR_ON_SHOW,
  COLLAPSE_SIDE_BAR_ON_HIDE,
  ACTORS_PAGE_IS_SHOWN,
} from '../components/ActorsInfoPage/Layout/Layout.js';

export const hoverSideBarOn = (isHover) => {
  return {
    type: COLLAPSE_SIDE_BAR_ON_SHOW,
    payload: isHover,
  };
};

export const hoverSideBarOff = (isHover) => {
  return {
    type: COLLAPSE_SIDE_BAR_ON_HIDE,
    payload: isHover,
  };
};

export const showActorsPageContent = (isShown) => {
  return {
    type: ACTORS_PAGE_IS_SHOWN,
    payload: isShown,
  };
};
