export const GET_CURRENT_EPISODES_DATA_BY_ID = 'GET_CURRENT_EPISODES_DATA_BY_ID';

export const getCurrentEpDescription = (data) => {
  return {
    type: GET_CURRENT_EPISODES_DATA_BY_ID,
    payload: data,
  };
};
