import {
  SET_GLOBAL, SET_ALL_INVESTMENTS, IS_FETCHING_INVESTMENTS,
  ATTACH_NEW_INVESTMENT, DETACH_INVESTMENT, UPDATE_INVESTMENT
} from '../constants';
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
    case DETACH_INVESTMENT:
      let investments = state.investments.allInvestments[action.data.status] ? [...state.investments.allInvestments[action.data.status]] : [];
      investments = investments.filter(investment => investment.id !== action.data.investmentId);
      return {
        ...state,
        investments: {
          ...state.investments,
          allInvestments: {
            ...state.investments.allInvestments,
            [action.data.status]: investments
          }
        }
      }
    case UPDATE_INVESTMENT:
      let updatedInvestments = state.investments.allInvestments[action.data.status] ? [...state.investments.allInvestments[action.data.status]] : [];
      updatedInvestments = updatedInvestments.map(investment => {
        if (investment.id === action.data.id) return action.data;
        return investment;
      });
      return {
        ...state,
        investments: {
          ...state.investments,
          allInvestments: {
            ...state.investments.allInvestments,
            [action.data.status]: updatedInvestments
          }
        }
      }
    default:
      return state;
  }
}
