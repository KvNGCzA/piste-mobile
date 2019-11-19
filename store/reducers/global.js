import { SET_GLOBAL, SET_ALL_INVESTMENTS, IS_FETCHING_INVESTMENTS, ATTACH_NEW_INVESTMENT } from '../constants';
import { initialGlobalState } from '../initialGlobalState';
import reactotron from 'reactotron-react-native';

export default (state = initialGlobalState, action) => {
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
    case ATTACH_NEW_INVESTMENT:
      return {
        ...state,
        investments: {
          ...state.investments,
          allInvestments: {
            ...state.investments.allInvestments,
            [action.data.status]: [
              action.data,
              ...state.investments.allInvestments[action.data.status]
            ]
          }
        }
      }
    default:
      return state;
  }
}
