import { 
  SHOW_LOGIN, HIDE_LOGIN, LOADING_START_L,
  LOADING_END_L, LOGOUT, LOGIN
} from "./actionTypes"

const initialState = {
  loading: false,
  isLogin: true,
  token: '',
  isOpen: false
}

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return {
        ...state,
        isOpen: true,
      }
    case HIDE_LOGIN:
      return {
        ...state,
        isOpen: false,
      }
    case LOADING_START_L:
      return {
        ...state,
        loading: true,
      }
    case LOADING_END_L:
      return {
        ...state,
        loading: false
      }
    case LOGOUT:
      return {
        ...state,
        isLogin: false
      }
    case LOGIN:
      return {
        ...state,
        isLogin: true
      }
    default:
      return state
  }
}