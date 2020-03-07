export const SELECT_MAINCAST = 'SELECT_MAINCAST';
export const SELECT_SECONDARY = 'SELECT_SECONDARY';
export const SELECT_MALE = 'SELECT_MALE';
export const SELECT_FEMALE = 'SELECT_FEMALE';
export const SELECT_ALL_ACTORS = 'SELECT_ALL_ACTORS';

export const selectMaincast = (checked) => {
  return {
    type: SELECT_MAINCAST,
    payload: checked,
  };
};
export const selectSecondary = (checked) => {
  return {
    type: SELECT_SECONDARY,
    payload: checked,
  };
};
export const selectMale = (checked) => {
  return {
    type: SELECT_MALE,
    payload: checked,
  };
};
export const selectFemale = (checked) => {
  return {
    type: SELECT_FEMALE,
    payload: checked,
  };
};
export const selectAll = (checked) => {
  return {
    type: SELECT_ALL_ACTORS,
    payload: checked,
  };
};
