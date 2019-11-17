import { SET_GLOBAL } from '../constants';
import { initialState } from '../initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL:
      return { ...state, ...action.data };
    default:
      return state;
  }
}