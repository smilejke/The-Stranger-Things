import { SELECT_ALL_ROLES, SELECT_ANY_ROLE } from './actions.js';

const defaultState = {
  checkedList: ['Maincast', 'Secondary'],
  indeterminate: false,
  checkAll: true,
};

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_ALL_ROLES:
      return {
        checkedList: action.payload ? defaultState.checkedList : [],
        indeterminate: false,
        checkAll: action.payload,
      };
    case SELECT_ANY_ROLE:
      return {
        checkedList: action.payload,
        indeterminate:
          !!action.payload.length && action.payload.length < defaultState.checkedList.length,
        checkAll: action.payload.length === defaultState.checkedList.length,
      };

    default:
      return state;
  }
};
