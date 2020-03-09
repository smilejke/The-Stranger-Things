export const GET_ACTOR = 'GET_ACTOR';

export const getCurrentActor = (actor) => {
  return {
    type: GET_ACTOR,
    payload: actor,
  };
};
