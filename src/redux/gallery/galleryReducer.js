import { 
  LOADING_START_G, LOADING_END_G, FETCH_GALLERY_SUCCESS, FETCH_GALLERY_ERROR, 
} from "./actionTypes"

const initialState = {
  data: {},
  loading: true,
  error: null,
}

export const GallaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    case FETCH_GALLERY_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case LOADING_START_G:
      return {
        ...state,
        loading: true,
      }
    case LOADING_END_G:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}