import { 
  LOADING_START_MP, LOADING_END_MP, FETCH_INDEX_PAGE_SUCCESS, 
} from "./actionTypes"

const initialState = {
  loading: true,
  indexPage: {}
}

export const MainPagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START_MP:
      return {
        ...state,
        loading: true
      }
    case LOADING_END_MP:
      return {
        ...state,
        loading: false
      }
    case FETCH_INDEX_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        indexPage: action.data
      }
    default:
      return state
  }
}