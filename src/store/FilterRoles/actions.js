export const SELECT_ALL_ROLES = 'SELECT_ALL_ROLES';
export const SELECT_ANY_ROLE = 'SELECT_ANY_ROLE';

export const selectAllRoles = (click) => {
  return {
    type: SELECT_ALL_ROLES,
    payload: click,
  };
};

export const selectAnyRole = (click) => {
  return {
    type: SELECT_ANY_ROLE,
    payload: click,
  };
};
