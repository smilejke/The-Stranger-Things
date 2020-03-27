import { fetchUrls } from '../../global/utils/global.js';
export const GET_CURRENT_ACTOR_ID = 'GET_CURRENT_ACTOR_ID';
export const DOWNLOAD_INFO_FOR_ACTORS_PROFILES = 'DOWNLOAD_INFO_FOR_ACTORS_PROFILES';
export const FIND_CURRENT_ACTOR_BY_ID = 'FIND_CURRENT_ACTOR_BY_ID';

export const getCurrentActor = (actor) => {
  return {
    type: GET_CURRENT_ACTOR_ID,
    payload: actor,
  };
};
export const findProfile = (profileArray) => {
  return {
    type: FIND_CURRENT_ACTOR_BY_ID,
    payload: profileArray,
  };
};

export const getActorsData = (actorId, loaderOn, loaderOff) => (dispatch) => {
  dispatch(loaderOn());
  setTimeout(() => {
    fetch(fetchUrls.profiles)
      .then(dispatch(getCurrentActor(actorId)))
      .then((response) => response.json())
      .then((data) => dispatch(findProfile(data)))
      .then(
        setTimeout(() => {
          dispatch(loaderOff());
        }, 100),
      );
  }, 900);
};
