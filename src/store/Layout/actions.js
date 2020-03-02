export const COLLAPSE_SIDE_BAR_ON_SHOW = 'COLLAPSE_SIDE_BAR_ON_SHOW';
export const COLLAPSE_SIDE_BAR_ON_HIDE = 'COLLAPSE_SIDE_BAR_ON_HIDE';
export const ACTORS_PAGE_IS_SHOWN = 'ACTORS_PAGE_IS_SHOWN';
export const GREETINGS_PAGE_IS_SHOWN = 'GREETINGS_PAGE_IS_SHOWN';

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
