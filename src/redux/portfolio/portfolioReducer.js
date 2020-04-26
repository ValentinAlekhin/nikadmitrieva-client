import { 
  LOADING_START_P, LOADING_END_P, FETCH_PAGE_SUCCESS, 
  FETCH_PAGE_ERROR,
} from "../actionTypes"

const initialState = {
  loading: true,
  data: [],
  error: null
}

export const PortfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case FETCH_PAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
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