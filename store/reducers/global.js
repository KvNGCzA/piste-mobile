import { SET_GLOBAL, SET_ERROR } from '../constants';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: {},
  errors: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL:
      return { ...state, ...action.data };
    default:
      return state;
  }
}