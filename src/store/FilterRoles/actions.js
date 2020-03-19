export const SELECT_MAINCAST = 'SELECT_MAINCAST';
export const SELECT_SECONDARY = 'SELECT_SECONDARY';
export const SELECT_MALE = 'SELECT_MALE';
export const SELECT_FEMALE = 'SELECT_FEMALE';
export const SELECT_ALL_ACTORS = 'SELECT_ALL_ACTORS';

export const selectMaincast = () => {
  return {
    type: SELECT_MAINCAST,
  };
};
export const selectSecondary = () => {
  return {
    type: SELECT_SECONDARY,
  };
};
export const selectMale = () => {
  return {
    type: SELECT_MALE,
  };
};
export const selectFemale = () => {
  return {
    type: SELECT_FEMALE,
  };
};
export const selectAll = () => {
  return {
    type: SELECT_ALL_ACTORS,
  };
};
