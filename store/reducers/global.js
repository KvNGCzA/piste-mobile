import { SET_GLOBAL, SET_ALL_INVESTMENTS, IS_FETCHING_INVESTMENTS } from '../constants';
import { initialState } from '../initialState';
import reactotron from 'reactotron-react-native';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL:
      return { ...state, ...action.data };
    case SET_ALL_INVESTMENTS:
      return {
        ...state,
        investments: {
          ...state.investments,
          allInvestments: action.data.investments
        }
      };
    case IS_FETCHING_INVESTMENTS:
        return {
          ...state,
          investments: {
            ...state.investments,
            isFetching: action.data.isFetching,
          }
        }
    default:
      return state;
  }
}
