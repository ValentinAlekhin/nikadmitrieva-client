import { LOADING_START_P, LOADING_END_P, GET_PORTFOLIO_PAGE } from "../types"

export const PortfolioReducer = (state, action) => {
  switch (action.type) {
    case GET_PORTFOLIO_PAGE:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case LOADING_START_P:
      return {
        ...state,
        loading: true
      }
    case LOADING_END_P:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}