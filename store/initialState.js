export const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: {},
  errors: '',
  investments: {
    fetchingInvestments: false,
    allInvestments: {}
  }
}